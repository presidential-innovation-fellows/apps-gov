[![Dependency Status](https://gemnasium.com/presidential-innovation-fellows/apps-gov.svg)](https://gemnasium.com/presidential-innovation-fellows/apps-gov)

#Apps.Gov

This is the public repo for apps.gov, which is an active marketplace that helps gov employees evlauate and compare cloud-based products. Information on product's description, certifications, and contract vehicles are listed. Additionally, resources for tech comapnies to list their products and how to get started selling to the federal government can be found.

This repo is open source, maintained by the [Presidential Innovation Fellows](pif.gov). If you have any questions regarding this repo or the content listed, please contact [apps-gov@gsa.gov](mailto:apps-gov@gsa.gov).

## How to list your product

To get started selling ot the federal government, check out [https://apps.gov/listing](https://apps.gov/listing) to learn more about steps to get listed, contract vehicles available, and security reviews when selling to the federal government.

## Editing your product

All products are listed in `JSON` format. Updates can be made and submitted via a pull request, which will be reviewed by the Apps.Gov team. The link to where all products are at https://github.com/presidential-innovation-fellows/apps-gov/tree/master/_data/products

The format for listing your product `JSON` includes three sections: 1) required, 2) optional, and 3) attributes.

Required:

    "slug": "product-file-name",
    "name": "product-name",
    "url": "product-url",
    "logo_url": "logo-url",
    "top_keywords": [
        "add"
        "up to"
        "five"
        "key"
        "words"
    ],
    "short_description": "High level product description, up to 140 characters.",
    "long_description": "Longer description of the product, which will be found on the product page.",
    "sales_poc": "sales-poc-email",
    
Optional:

    "twitter_handle": "twitter_handle",
    "linkedin_id": "linkedin_id",
    "youtube_id": "youtube_id",
    "tags": [
        "up to",
        "five tags",
        "from the",
        "approved list",
        "which will be used for search"
    ],
    
Attributes: (add the appropriate ones that apply to your product)

    "contracts": [
        "add from the approved list below",
        "e.g. micro",
        "sewp is universal and should be added by default"
    ],


    "gov_tos": "gov-tos-url",
    "pta": "add the value "true" OR the url to PTA",
    "pia": "add the value "true" OR the url to PIA",
    "sorn": "add the value "true" OR the url to SORN",


    "fedramp_jab": "fedramp-jab-url",
    "fedramp_agency": "fedramp-agency-url",
    "fedramp_csp": "fedramp-csp-url",
    "fedramp_inprocess_jab": "fedramp-inprocess-jab-url",
    "fedramp_inprocess_agency": "fedramp-inprocess-agency-url",
    "agency_ato": "link-to-ato",
    

    "fedramp_ready": "fedramp-ready-url",
    "fedramp_infrastructure": true,
    "dhs_swamp": "add the value "true" or url to test results",
    "nccoe": "add the value "true" or url to test results",
    "icd_503": "add the value "true" or url to certification",
    "hipaa": "add the value "true" or url to compliance doc",
    "pci": "add the value "true" or url to compliance doc"
    
### How to run this locally

Clone this repo https://github.com/mbland/jekyll_pages_api_search/ and update your `Gemfile` to set the url path to this gem in your local directory

Within the apps-gov repo, run `./go init` which installs the npm modules (specified in package.json). Specifically, we need browserify and uglifyify to compile the custom js/products.js code into js/products-bundle.js, as specified in the jekyll_pages_api_search: browserify: property of _config.yml.

Then, run `./go build` and `./go serve` to run the `bundler-aware` Jekyll build and serve commands, respectively. The .go script also sets the `NODE_PATH environment` variable to add the `node_modules` directory, so that the locally-installed browserify and uglifyify modules are discoverable.
    
Navigate to 

## Appendix

### Contracts

Below is a list of contract vehicles and mechanisms intended to be used by all agencies. Use the below terms to add them to your product page. If your product is being procured via other cross-agency contracts, please email the Apps.Gov team at apps-gov@gsa.gov to have them reviewed and added. You can find the format and information required at https://github.com/presidential-innovation-fellows/apps-gov/tree/master/_data/contracts

Code | Contract
--- | ---
micro | Micro-Purchase Agreement
s70 | Schedule 70
sewp | NASA SEWP (GWAC)
nitaac | NIH NITAAC (GWAC)

### Agencies

When adding customers, please use the following terms to appropriately populate the agency images. If an agency customer isn't listed, please reach out to the Apps.Gov team to have it added. Need to add an agency customer? Please email apps-gov@gsa.gov to add them in or commit a pull request.

Code | Name
--- | ---
DOC | Department of Commerce
DOE | Department of Energy
DOI | Department of Interior
DOL | Department of Labor
ED | Department of Education
FDA | Food and Drug Administration
FEMA | Federal Emergency Management Agency
GSA | General Services Administration
HHS | Health and Human Services
IRS | Internal Revenue Service
MCC | Millennium Challenge Corporation
NARA | National Archives and Records Administration
NASA | National Aeronautics and Space Administration
NIH | National Institute of Health
NIST | National Institute of Standards and Technology
NOAA | National Oceanic and Atmospheric Administration
NSF | National Science Foundatoin
OSTP | White House Office of Science & Technology, Policy
SBA | Small Business Administration
Smithsonian | Smithsonian Institution
State | State Department
Treasury | Department of the Treasury
USAID | US Agency for International Development
USDA | Department of Agriculture
USCB | Census Bureau
USCIO | US Chief Information Officer
USPTO | United States Patent and Trademark Office
VA | Veteran Affairs
