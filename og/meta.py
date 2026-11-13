#!/usr/bin/env python3
"""Write the social-preview tags (Open Graph + Twitter) into every page.

    python3 og/meta.py                         # relative image paths (no domain yet)
    python3 og/meta.py https://your-domain.com # absolute URLs — run this once the site is live

Safe to re-run: it replaces the block between <!-- social --> and <!-- /social -->.
"""
import glob, html, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = (sys.argv[1].rstrip('/') if len(sys.argv) > 1 else '')
SITE = 'Emmanuel Ugwu'
IMG_ALT = 'Emmanuel Ugwu — full-stack engineer & technical writer'

def tag(attr, key, val):
    return f'<meta {attr}="{key}" content="{html.escape(val, quote=True)}">'

for path in ['index.html', 'work.html'] + sorted(os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, 'work', '*.html'))):
    f = os.path.join(ROOT, path)
    s = open(f, encoding='utf-8').read()
    title = html.unescape(re.search(r'<title>(.*?)</title>', s, re.S).group(1).strip())
    desc = html.unescape(re.sub(r'\s+', ' ', re.search(r'<meta\s+name="description"\s+content="(.*?)"', s, re.S).group(1)))
    up = '../' if path.startswith('work/') else ''
    page_url = f'{BASE}/{"" if path == "index.html" else path}' if BASE else ''
    img = (f'{BASE}/assets/og-image.png' if BASE else f'{up}assets/og-image.png') + '?v=3'
    lines = [
        tag('property', 'og:type', 'website' if path == 'index.html' else 'article'),
        tag('property', 'og:site_name', SITE),
        tag('property', 'og:title', title),
        tag('property', 'og:description', desc),
        *( [tag('property', 'og:url', page_url)] if BASE else [] ),
        tag('property', 'og:image', img),
        tag('property', 'og:image:width', '1200'),
        tag('property', 'og:image:height', '630'),
        tag('property', 'og:image:alt', IMG_ALT),
        tag('name', 'twitter:card', 'summary_large_image'),
        tag('name', 'twitter:title', title),
        tag('name', 'twitter:description', desc),
        tag('name', 'twitter:image', img),
        tag('name', 'theme-color', '#ffffff'),
        f'<link rel="apple-touch-icon" href="{up}assets/apple-touch-icon.png">',
        *( [f'<link rel="canonical" href="{page_url}">'] if BASE else [] ),
    ]
    block = '<!-- social -->\n' + '\n'.join(lines) + '\n<!-- /social -->'
    # drop any old social tags, then insert / replace the block
    s = re.sub(r'\s*<!-- social -->.*?<!-- /social -->', '', s, flags=re.S)
    s = re.sub(r'\s*<meta\s+(?:property|name)="(?:og:[^"]*|twitter:[^"]*|theme-color)"[^>]*?/?>', '', s, flags=re.S)
    s = re.sub(r'\s*<link\s+rel="(?:apple-touch-icon|canonical)"[^>]*?/?>', '', s, flags=re.S)
    m = re.search(r'<meta\s+name="description"[^>]*?/?>', s, re.S)
    s = s[:m.end()] + '\n' + block + s[m.end():]
    open(f, 'w', encoding='utf-8').write(s)
    print('ok', path)
