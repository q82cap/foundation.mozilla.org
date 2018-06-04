from django.utils.html import format_html
from wagtail.core import hooks

@hooks.register('insert_editor_js')
def editor_js():
    return format_html('<script src="js/wagtail/editor-l10n.js"></script>')
