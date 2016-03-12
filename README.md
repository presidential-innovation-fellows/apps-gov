[![Dependency Status](https://gemnasium.com/presidential-innovation-fellows/apps-gov.svg)](https://gemnasium.com/presidential-innovation-fellows/apps-gov)

#Apps.Gov

This is the public repo for apps.gov, which is an active marketplace that helps gov employees evlauate and compare cloud-based products. Information on product's description, certifications, and contract vehicles are listed. Additionally, resources for tech comapnies to list their products and how to get started selling to the federal government can be found.

This repo is open source, maintained by the [Presidential Innovation Fellows](pif.gov). If you have any questions regarding this repo or the content listed, please contact [apps-gov@gsa.gov](mailto:apps-gov@gsa.gov).

## How to list your product

To get started selling ot the federal government, check out [https://apps.gov/listing](https://apps.gov/listing) to learn more about steps to get listed, contract vehicles available, and security reviews to get started.

## Editing your product

All products are listed in `JSON` format. Updates can be made and submitted via a pull request, which will be reviewed by the Apps.Gov team.

### Contracts

Below is a list of approved contracts, use the below tearms to populate the right content on your product page. If you are on other contracts, please email the Apps.Gov team to have it reviewed and added.

Code | Contract
--- | ---
micro | Micro-Purchase Agreement
s70 | Schedule 70 (GWAC)
sewp | NASA SEWP (GWAC)
nitaac | NIH NITAAC (GWAC)

### Agencies

When adding customers, please use the following terms to appropriately populate the agency images. If an agency customer isn't listed, please reach out to the Apps.Gov team to have it added.

### How to run this locally

install jekyll

    bundle install

clone this repo https://github.com/mbland/jekyll_pages_api_search/

Within the apps-gov repo, run `./go init` which installs the npm modules (specified in package.json). Specifically, we need browserify and uglifyify to compile the custom js/products.js code into js/products-bundle.js, as specified in the jekyll_pages_api_search: browserify: property of _config.yml.

Then, run `./go` build and `./go` serve to run the bundler-aware Jekyll build and serve commands, respectively. The .go script also sets the NODE_PATH environment variable to add the node_modules directory, so that the locally-installed browserify and uglifyify modules are discoverable.

    jekyll serve
    
Navigate to 

### Appendix

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
