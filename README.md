[![Dependency Status](https://gemnasium.com/presidential-innovation-fellows/apps-gov.svg)](https://gemnasium.com/presidential-innovation-fellows/apps-gov)

# Apps.Gov

This is the public repo for apps.gov, which is an active marketplace that helps gov employees evaluate and compare cloud-based products. Information on product's description, certifications, and contract vehicles are listed. Additionally, resources for tech companies to list their products and how to get started selling to the federal government can be found.

This repo is open source, maintained by the [Presidential Innovation Fellows](pif.gov). If you have any questions regarding this repo or the content listed, please contact [apps-gov@gsa.gov](mailto:apps-gov@gsa.gov).

## How to list your product

To get started selling to the federal government, check out [https://apps.gov/listing](https://apps.gov/listing) to learn more about steps to get listed, contract vehicles available, and security reviews when selling to the federal government.

## Editing your product

All products are listed in `JSON` format. Updates can be made and submitted via a pull request, which will be reviewed by the Apps.Gov team. The link to where all products are at https://github.com/presidential-innovation-fellows/apps-gov/tree/master/_data/products

**NOTICE!!!** To help ensure and maintain quality of products listed, only pull requests that come from GitHub accounts that have a publicly listed, confirmed (default GitHub requirement) company email address OR the company GitHub organization associated with the profile. A note will be added if this is not true and will be reviewed again once complete and noted in the comments, notifying the reviewer's GitHub username.

The format for listing your product `JSON` includes three sections: 1) required, 2) optional, and 3) attributes.

#### Required:

    "slug": "product-file-name",
    "name": "product-name",
    "url": "product-url",
    "logo": "file-name-ie-product.png-otherwise-value-should-be-null",
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
    
**NOTE 1:** Adding a logo requires adding an image (max dimensions 400x400 and less than 100kb) via comment to your pull request. GitHub allows users to drag and drop files directly into comment form fields, which will then be used to integrate into the deployment.

**NOTE 2:** The `sales_poc` designation enables the Contact button on your product page.

#### Optional:

    "twitter_handle": "twitter_handle",
    "facebook_url": "facebook_url",
    "linkedin_id": "linkedin_id",
    "angellist_name": "angellist_name",
    "youtube_video_id": "youtube_video_id",

#### Attributes: (add the appropriate ones that apply to your product)

**Contract Vehicles:**

    "contracts": [
        "add from the approved list in appendix",
        "e.g. micro",
        "sewp is universal and should be added by default"
    ],
    
**NOTE:** All products should be available on the NASA SEWP contract vehicle by default. Read more at [https://apps.gov/listing/#sewp](https://apps.gov/listing/#sewp)

**Government Customers:**

    "gov_customers": [
        "add the agency code here",
        "e.g. GSA",
        "see appendix for details"
    ]

**Reviews:**

    "gov_tos": "add the value "true" OR the url to TOS",
    "pta": "add the value "true" OR the url to PTA",
    "pia": "add the value "true" OR the url to PIA",
    "sorn": "add the value "true" OR the url to SORN",

**Authority to Operate:**

    "fedramp_jab": "fedramp-jab-url",
    "fedramp_agency": "fedramp-agency-url",
    "fedramp_csp": "fedramp-csp-url",
    "fedramp_inprocess_jab": "fedramp-inprocess-jab-url",
    "fedramp_inprocess_agency": "fedramp-inprocess-agency-url",
    "agency_ato": "link-to-ato",

**Additional Testing:**

    "fedramp_ready": "fedramp-ready-url",
    "fedramp_infrastructure": true,
    "dhs_swamp": "add the value "true" or url to test results",
    "nccoe": "add the value "true" or url to test results",
    "icd_503": "add the value "true" or url to certification",
    "hipaa": "add the value "true" or url to compliance doc",
    "pci": "add the value "true" or url to compliance doc"

### How to run this locally

1. Install [Ruby](https://www.ruby-lang.org/) on your system. This site
   requires version 2.2.4 or greater. You can see if a compatible version is
   already installed by running `ruby -v` in a terminal window.

   You may wish to install a version manager such as
   [rbenv](https://github.com/rbenv/rbenv) to manage and install different
   Ruby versions.

1. Install [Node.js](https://nodejs.org/) on your system. This site requires
   version 4.2 or greater or version 5 or greater. You can see if a compatible
   version is already installed by running `node -v` in a terminal window.

   You may wish to install a version manager such as
   [nvm](https://github.com/creationix/nvm) to manage and install different
   Node.js versions.

   *Why Node.js?* It's used to build the [lunr.js search
   index](http://lunrjs.com/) and search user interface components supplied by
   the [`jekyll_pages_api_search` gem](https://rubygems.org/gems/jekyll_pages_api_search).
   We also use [browserify](https://www.npmjs.com/package/browserify)
   and [uglifyify](https://www.npmjs.com/package/uglifyify) to compile the
   custom [`assets/js/products.js`](assets/js/products.js]) code into
   `js/products-bundle.js`, as specified in the
   `jekyll_pages_api_search.browserify` property of
   [`_config.yml`](_config.yml).

1. Create a clone of this repository on your computer and change into its
   directory:
   ```sh
   $ git clone https://github.com/presidential-innovation-fellows/apps-gov
   $ cd apps-gov
   ```

1. Run `./go init` to install the [Ruby gems](https://rubygems.org/) specified
   in the [`Gemfile`](Gemfile) and the [npm modules](https://www.npmjs.com/)
   specified in [`package.json`](package.json).

   The `./go` script is [Bundler](http://bundler.io)-aware, so you do not need
   to run `bundle install` first.

   *Windows users:* You may need to run the script as `ruby ./go init`
   instead, and run other `./go` script commands in a similar fashion.

1. Run `./go build` to build the site, and `./go serve` to build and serve the
   site locally at http://127.0.0.1:4000.

   These commands run `jekyll build` and `jekyll serve`, respectively. You can
   pass command line arguments as you would to those bare commands.

   *Why not just run `bundle exec jekyll serve`?* `./go init` and `./go serve`
   perform the same environment setup as `bundle exec`, but the `./go` script
   also sets the `NODE_PATH` environment variable to add the `node_modules`
   directory, so that the locally-installed `browserify` and `uglifyify`
   modules are discoverable.

   This is because `jekyll_pages_api_search` contains components that
   `require()` these modules, but these components reside in a directory this
   is neither a child nor a parent of the site. Consequently, [the default
   Node.js module resolution
   algorithm](https://nodejs.org/api/modules.html#modules_all_together) will
   not discover the modules on its own.


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
CFPB | Consumer Financial Protection Bureau
CNSC | Corporation for National and Community Service
DHA | Defense Health Agency
DHS | Departmnet of Homeland Security
DOC | Department of Commerce
DOD | Departmnet of Defense
DOE | Department of Energy
DOI | Department of Interior
DOJ | Department of Justice
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
NSA | National Security Agency
NSF | National Science Foundatoin
OSTP | White House Office of Science & Technology, Policy
SBA | Small Business Administration
Smithsonian | Smithsonian Institution
SSA | Social Security Administration
State | State Department
Treasury | Department of the Treasury
USAID | US Agency for International Development
USDA | Department of Agriculture
USCB | Census Bureau
USCIO | US Chief Information Officer
USPTO | United States Patent and Trademark Office
VA | Veteran Affairs
