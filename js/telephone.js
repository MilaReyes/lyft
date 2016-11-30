$("#demo").intlTelInput();
// whether or not to allow the dropdown
allowDropdown: true,

// if there is just a dial code in the input: remove it on blur, and re-add it on focus
autoHideDialCode: true,

// add a placeholder in the input with an example number for the selected country
autoPlaceholder: "polite",

// modify the auto placeholder
customPlaceholder: null,

// append menu to a specific element
dropdownContainer: "",

// don't display these countries
excludeCountries: [],

// format the input value during initialisation
formatOnInit: true,

// geoIp lookup function
geoIpLookup: null,

// initial country
initialCountry: "",

// don't insert international dial codes
nationalMode: true,

// number type to use for placeholders
numberType: "MOBILE",

// display only these countries
onlyCountries: [],

// the countries at the top of the list. defaults to united states and united kingdom
preferredCountries: [ "us", "gb" ],

// display the country dial code next to the selected flag so it's not part of the typed number
separateDialCode: false,

// specify the path to the libphonenumber script to enable validation/formatting
utilsScript: ""