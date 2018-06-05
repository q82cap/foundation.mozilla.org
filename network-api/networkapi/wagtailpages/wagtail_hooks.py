from django.conf import settings
from django.utils.html import format_html, format_html_join
from wagtail.core import hooks

@hooks.register('insert_global_admin_js')
def editor_js():
    js_files = [
        'js/editor-l10n.js',
    ]

    js_includes = format_html_join('\n', '<script src="{0}{1}"></script>',
        ((settings.STATIC_URL, filename) for filename in js_files)
    )

    css_files = [
        'css/l10n.css',
    ]

    css_includes = format_html_join('\n', '<link rel="stylesheet" href="{0}{1}">',
        ((settings.STATIC_URL, filename) for filename in css_files)
    )

    return js_includes + css_includes
