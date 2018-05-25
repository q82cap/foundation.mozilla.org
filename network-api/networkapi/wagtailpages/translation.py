from .models import (
    ModularPage,
    MiniSiteNameSpace,
    PrimaryPage,
    NewsPage,
    InitiativesPage,
    ParticipatePage,
    PeoplePage,
    Styleguide,
    Homepage,
    RedirectingPage,
)

from modeltranslation.translator import TranslationOptions
from modeltranslation.decorators import register

@register(ModularPage)
class ModularPageTR(TranslationOptions):
    fields = (
        'header',
        'body',
    )

@register(MiniSiteNameSpace)
class MiniSiteNameSpaceTR(TranslationOptions):
    fields = ()

@register(PrimaryPage)
class PrimaryPageTR(TranslationOptions):
    fields = (
        'header',
        'body',
    )

@register(NewsPage)
class NewsPageTR(TranslationOptions):
    fields = ()


@register(InitiativesPage)
class InitiativesPageTR(TranslationOptions):
    fields = ()


@register(ParticipatePage)
class ParticipatePageTR(TranslationOptions):
    fields = ()


@register(PeoplePage)
class PeoplePageTR(TranslationOptions):
    fields = ()


@register(Styleguide)
class StyleguideTR(TranslationOptions):
    fields = ()

@register(Homepage)
class HomepageTR(TranslationOptions):
    fields = (
        'hero_headline',
        'hero_story_description',
        'hero_button_text',
        'hero_button_url',
    )

@register(RedirectingPage)
class RedirectingPageTR(TranslationOptions):
    fields = (
        'URL',
    )
