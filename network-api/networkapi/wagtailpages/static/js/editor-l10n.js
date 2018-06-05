///////////////
jQuery( () => {
///////////////

const tabbedContent = $(`form .tab-content`);
const topLevel = (tabbedContent.length > 0) ? tabbedContent : $(`.content form`);

if (topLevel.length === 0) {
  // obviously, if we don't have an element to attach
  // the picker to, we might as well stop right now.
  return;
}

if (topLevel.attr(`class`) && topLevel.attr(`class`).indexOf(`search`) > -1) {
  // if the only forms on the page are search forms,
  // we're not actually dealing with page/snippets
  return;
}

/**
 * Build the set of fields-per-locale. Each set will receive
 * a button to toggle visibility for all fields in that set,
 * with the note that unlocalised content (such as images)
 * will always stay visible.
 */
function buildSets() {
  var localisedElements = {};

  $(`li.object`, topLevel).each( (index, element) => {
    var tc = element.textContent;
    var res = tc.match(/\[\w\w\]/);
    if (res === null) return;

    var locale = res[0].replace(/[\[\]]/g,'');

    if (!localisedElements[locale]) {
      localisedElements[locale] = [];
    }

    localisedElements[locale].push(element);
    element.classList.add(`l10n-hidden`);
  });

  return localisedElements;
}

/**
 * Build a locale picker bar, with buttons that toggle
 * visibility for each locale's fields.
 */
function buildLocalPicker() {
  var bar = $(`<div class="locale-picker"><h2>View/edit fields for:</h2></div>`);
  var ul = $(`<ul class="locales"></ul>`);
  bar.append(ul);

  var buttons = {};
  locales.forEach( locale => {
    var li = $(`<li class="locale"><button class="locale-toggle">${locale}</button></li>`);
    ul.append(li);

    $(`button.locale-toggle`, li).each( (index, button) => {
      button.addEventListener(`click`, e => {
        e.preventDefault();
        button.classList.toggle(`active`);
        toggleLocale(locale);
      })

      buttons[locale] = button;
    });
  });

  bar.prependTo(topLevel);

  return buttons;
}

/**
 * This function allows either blind toggling
 * of a field's visibility, or explicitly
 * making visible/invisible based on the
 * value of `state` (a boolean).
 */
function toggleLocale(locale, state) {
  var action = `toggle`;

  if (state !== undefined) {
    action = state ? `remove` : `add`
  }

  localisedElements[locale].forEach(element => {
    element.classList[action](`l10n-hidden`);
  });
}

var default_locale = `en`,
    localisedElements = buildSets(),
    locales = Object.keys(localisedElements);

// If there are no locale sets, then there is
// no locale field picker to build, either.
if (locales.length === 0) return;

var loccalePicker = buildLocalPicker();
loccalePicker[default_locale].click();

///////////////
});
///////////////
