(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{388:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),e("p",[t._v(t._s(t.$page.frontmatter.abstract))]),t._v(" "),e("MetadataTable"),t._v(" "),e("h2",{attrs:{id:"language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[t._v("#")]),t._v(" Language")]),t._v(" "),e("Language"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("A Data Package consists of:")]),t._v(" "),e("ul",[e("li",[t._v("Metadata that describes the structure and contents of the package")]),t._v(" "),e("li",[t._v("Resources such as data files that form the contents of the package")])]),t._v(" "),e("p",[t._v("The Data Package metadata is stored in a “descriptor”. This descriptor is what makes a collection of data a Data Package. The structure of this descriptor is the main content of the specification below.")]),t._v(" "),e("p",[t._v("In addition to this descriptor a data package will include other resources such as data files. The Data Package specification does NOT impose any requirements on their form or structure and can therefore be used for packaging "),e("strong",[t._v("any kind of data")]),t._v(".")]),t._v(" "),e("p",[t._v("The data included in the package may be provided as:")]),t._v(" "),e("ul",[e("li",[t._v("Files bundled locally with the package descriptor")]),t._v(" "),e("li",[t._v("Remote resources, referenced by URL")]),t._v(" "),e("li",[t._v("“Inline” data (see below) which is included directly in the descriptor")])]),t._v(" "),e("h3",{attrs:{id:"illustrative-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#illustrative-structure"}},[t._v("#")]),t._v(" Illustrative Structure")]),t._v(" "),e("p",[t._v("A minimal data package on disk would be a directory containing a single file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("datapackage.json  # (required) metadata and schemas for this data package\n")])])]),e("p",[t._v("Lacking a single external source of data would make this of limited use. A slightly less minimal version would be:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("datapackage.json\n# a data file (CSV in this case)\ndata.csv\n")])])]),e("p",[t._v("Additional files such as a README, scripts (for processing or analyzing the data) and other material may be provided. By convention scripts go in a scripts directory and thus, a more elaborate data package could look like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("datapackage.json  # (required) metadata and schemas for this data package\nREADME.md         # (optional) README in markdown format\n\n# data files may go either in data subdirectory or in main directory\nmydata.csv\ndata/otherdata.csv\n\n# the directory for code scripts - again these can go in the base directory\nscripts/my-preparation-script.py\n")])])]),e("p",[t._v("Several example data packages can be found in the "),e("a",{attrs:{href:"https://github.com/datasets",target:"_blank",rel:"noopener noreferrer"}},[t._v("datasets organization on github"),e("OutboundLink")],1),t._v(", including:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/datasets/gdp",target:"_blank",rel:"noopener noreferrer"}},[t._v("World GDP"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/datasets/country-codes",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 3166-2 country codes"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),e("h3",{attrs:{id:"descriptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#descriptor"}},[t._v("#")]),t._v(" Descriptor")]),t._v(" "),e("p",[t._v("The descriptor is the central file in a Data Package. It provides:")]),t._v(" "),e("ul",[e("li",[t._v("General metadata such as the package’s title, license, publisher etc")]),t._v(" "),e("li",[t._v("A list of the data “resources” that make up the package including their location on disk or online and other relevant information (including, possibly, schema information about these data resources in a structured form)")])]),t._v(" "),e("p",[t._v("A Data Package descriptor "),e("code",[t._v("MUST")]),t._v(" be a valid JSON "),e("code",[t._v("object")]),t._v(". (JSON is defined in "),e("a",{attrs:{href:"http://www.ietf.org/rfc/rfc4627.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4627"),e("OutboundLink")],1),t._v("). When available as a file it "),e("code",[t._v("MUST")]),t._v(" be named "),e("code",[t._v("datapackage.json")]),t._v(" and it "),e("code",[t._v("MUST")]),t._v(" be placed in the top-level directory (relative to any other resources provided as part of the data package).")]),t._v(" "),e("p",[t._v("The descriptor "),e("code",[t._v("MUST")]),t._v(" contain a "),e("code",[t._v("resources")]),t._v(" property describing the data resources.")]),t._v(" "),e("p",[t._v("All other properties are considered "),e("code",[t._v("metadata")]),t._v(" properties. The descriptor "),e("code",[t._v("MAY")]),t._v(" contain any number of other "),e("code",[t._v("metadata")]),t._v(" properties. The following sections provides a description of required and optional metadata properties for a Data Package descriptor.")]),t._v(" "),e("p",[t._v("Adherence to the specification does not imply that additional, non-specified properties cannot be used: a descriptor "),e("code",[t._v("MAY")]),t._v(" include any number of properties in additional to those described as required and optional properties. For example, if you were storing time series data and wanted to list the temporal coverage of the data in the Data Package you could add a property "),e("code",[t._v("temporal")]),t._v(" (cf "),e("a",{attrs:{href:"http://dublincore.org/documents/usageguide/qualifiers.shtml#temporal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dublin Core"),e("OutboundLink")],1),t._v("):")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temporal"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19th Century"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1800-01-01"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1899-12-31"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This flexibility enables specific communities to extend Data Packages as appropriate for the data they manage. As an example, the "),e("RouterLink",{attrs:{to:"/tabular-data-package/"}},[t._v("Tabular Data Package")]),t._v(" specification extends Data Package to the case where all the data is tabular and stored in CSV.")],1),t._v(" "),e("p",[t._v("Here is an illustrative example of a datapackage JSON file:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  # general "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),t._v(" like title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sources etc\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a-unique-human-readable-and-url-usable-identifier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A nice title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"licenses"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sources"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  # list "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the data resources "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" resource info described below "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  # optional\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" additional information "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"resource-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource-information"}},[t._v("#")]),t._v(" Resource Information")]),t._v(" "),e("p",[t._v("Packaged data resources are described in the "),e("code",[t._v("resources")]),t._v(" property of the package descriptor. This property "),e("code",[t._v("MUST")]),t._v(" be an array of "),e("code",[t._v("objects")]),t._v(". Each object "),e("code",[t._v("MUST")]),t._v(" follow the "),e("RouterLink",{attrs:{to:"/data-resource/"}},[t._v("Data Resource specification")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" Metadata")]),t._v(" "),e("h4",{attrs:{id:"required-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#required-properties"}},[t._v("#")]),t._v(" Required Properties")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("resources")]),t._v(" property is required, with at least one resource.")]),t._v(" "),e("h4",{attrs:{id:"recommended-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recommended-properties"}},[t._v("#")]),t._v(" Recommended Properties")]),t._v(" "),e("p",[t._v("In addition to the required properties, the following properties "),e("code",[t._v("SHOULD")]),t._v(" be included in every package descriptor:")]),t._v(" "),e("h5",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),e("code",[t._v("name")])]),t._v(" "),e("p",[t._v("A short url-usable (and preferably human-readable) name of the package. This "),e("code",[t._v("MUST")]),t._v(" be lower-case and contain only alphanumeric characters along with “.”, “_” or “-” characters. It will function as a unique identifier and therefore "),e("code",[t._v("SHOULD")]),t._v(" be unique in relation to any registry in which this package will be deposited (and preferably globally unique).")]),t._v(" "),e("p",[t._v("The name "),e("code",[t._v("SHOULD")]),t._v(" be invariant, meaning that it "),e("code",[t._v("SHOULD NOT")]),t._v(" change when a data package is updated, unless the new package version should be considered a distinct package, e.g. due to significant changes in structure or interpretation. Version distinction "),e("code",[t._v("SHOULD")]),t._v(" be left to the version property. As a corollary, the name also "),e("code",[t._v("SHOULD NOT")]),t._v(" include an indication of time range covered.")]),t._v(" "),e("h5",{attrs:{id:"id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" "),e("code",[t._v("id")])]),t._v(" "),e("p",[t._v("A property reserved for globally unique identifiers. Examples of identifiers that are unique include UUIDs and DOIs.")]),t._v(" "),e("p",[t._v("A common usage pattern for Data Packages is as a packaging format within the bounds of a system or platform. In these cases, a unique identifier for a package is desired for common data handling workflows, such as updating an existing package. While at the level of the specification, global uniqueness cannot be validated, consumers using the "),e("code",[t._v("id")]),t._v(" property "),e("code",[t._v("MUST")]),t._v(" ensure identifiers are globally unique.")]),t._v(" "),e("p",[t._v("Examples:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b03ec84-77fd-4270-813b-0c698943f7ce"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://doi.org/10.1594/PANGAEA.726855"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h5",{attrs:{id:"licenses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#licenses"}},[t._v("#")]),t._v(" "),e("code",[t._v("licenses")])]),t._v(" "),e("p",[t._v("The license(s) under which the package is provided.")]),t._v(" "),e("p",[e("strong",[t._v("This property is not legally binding and does not guarantee the package is licensed under the terms defined in this property.")])]),t._v(" "),e("p",[e("code",[t._v("licenses")]),t._v(" "),e("code",[t._v("MUST")]),t._v(" be an array. Each item in the array is a License. Each "),e("code",[t._v("MUST")]),t._v(" be an "),e("code",[t._v("object")]),t._v(". The object "),e("code",[t._v("MUST")]),t._v(" contain a "),e("code",[t._v("name")]),t._v(" property and/or a "),e("code",[t._v("path")]),t._v(" property. It "),e("code",[t._v("MAY")]),t._v(" contain a "),e("code",[t._v("title")]),t._v(" property.")]),t._v(" "),e("p",[t._v("Here is an example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"licenses"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ODC-PDDL-1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://opendatacommons.org/licenses/pddl/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Open Data Commons Public Domain Dedication and License v1.0"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("name")]),t._v(": The "),e("code",[t._v("name")]),t._v(" "),e("code",[t._v("MUST")]),t._v(" be an "),e("a",{attrs:{href:"http://licenses.opendefinition.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Definition license ID"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v("path")]),t._v(": A "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("url-or-path")]),t._v(" string, that is a fully qualified HTTP address, or a relative POSIX path (see "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("the url-or-path definition in Data Resource for details")]),t._v(").")],1),t._v(" "),e("li",[e("code",[t._v("title")]),t._v(": A human-readable title.")])]),t._v(" "),e("h5",{attrs:{id:"profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[t._v("#")]),t._v(" "),e("code",[t._v("profile")])]),t._v(" "),e("p",[t._v("A string identifying the "),e("RouterLink",{attrs:{to:"/profiles/"}},[t._v("profile")]),t._v(" of this descriptor as per the "),e("RouterLink",{attrs:{to:"/profiles/"}},[t._v("profiles")]),t._v(" specification.")],1),t._v(" "),e("p",[t._v("Examples:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"profile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabular-data-package"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"profile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/my-profiles-json-schema.json"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"optional-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[t._v("#")]),t._v(" Optional Properties")]),t._v(" "),e("p",[t._v("The following are commonly used properties that the package descriptor "),e("code",[t._v("MAY")]),t._v(" contain:")]),t._v(" "),e("h5",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" "),e("code",[t._v("title")])]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("string")]),t._v(" providing a title or one sentence description for this package")]),t._v(" "),e("h5",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" "),e("code",[t._v("description")])]),t._v(" "),e("p",[t._v("A description of the package. The description "),e("code",[t._v("MUST")]),t._v(" be "),e("a",{attrs:{href:"http://commonmark.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown"),e("OutboundLink")],1),t._v(" formatted – this also allows for simple plain text as plain text is itself valid markdown. The first paragraph (up to the first double line break) should be usable as summary information for the package.")]),t._v(" "),e("h5",{attrs:{id:"homepage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homepage"}},[t._v("#")]),t._v(" "),e("code",[t._v("homepage")])]),t._v(" "),e("p",[t._v("A URL for the home on the web that is related to this data package.")]),t._v(" "),e("h5",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" "),e("code",[t._v("version")])]),t._v(" "),e("p",[t._v("A version string identifying the version of the package. It should conform to the "),e("a",{attrs:{href:"http://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning"),e("OutboundLink")],1),t._v(" requirements and should follow the "),e("RouterLink",{attrs:{to:"/patterns/#data-package-version"}},[t._v("Data Package Version")]),t._v(" pattern.")],1),t._v(" "),e("h5",{attrs:{id:"sources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[t._v("#")]),t._v(" "),e("code",[t._v("sources")])]),t._v(" "),e("p",[t._v("The raw sources for this data package. It "),e("code",[t._v("MUST")]),t._v(" be an array of Source objects. Each Source object "),e("code",[t._v("MUST")]),t._v(" have a "),e("code",[t._v("title")]),t._v(" and "),e("code",[t._v("MAY")]),t._v(" have "),e("code",[t._v("path")]),t._v(" and/or "),e("code",[t._v("email")]),t._v(" properties. Example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World Bank and OECD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("title")]),t._v(": title of the source (e.g. document or organization name)")]),t._v(" "),e("li",[e("code",[t._v("path")]),t._v(": A "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("url-or-path")]),t._v(" string, that is  a fully qualified HTTP address, or a relative POSIX path (see "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("the url-or-path definition in Data Resource for details")]),t._v(").")],1),t._v(" "),e("li",[e("code",[t._v("email")]),t._v(": An email address")])]),t._v(" "),e("h5",{attrs:{id:"contributors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" "),e("code",[t._v("contributors")])]),t._v(" "),e("p",[t._v("The people or organizations who contributed to this Data Package. It "),e("code",[t._v("MUST")]),t._v(" be an array. Each entry is a Contributor and "),e("code",[t._v("MUST")]),t._v(" be an "),e("code",[t._v("object")]),t._v(". A Contributor "),e("code",[t._v("MUST")]),t._v(" have a "),e("code",[t._v("title")]),t._v(" property and MAY contain "),e("code",[t._v("path")]),t._v(", "),e("code",[t._v("email")]),t._v(", "),e("code",[t._v("role")]),t._v(" and "),e("code",[t._v("organization")]),t._v(" properties. An example of the object structure is as follows:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contributors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Joe Bloggs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe@bloggs.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.bloggs.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("title")]),t._v(": name/title of the contributor (name for person, name/title of organization)")]),t._v(" "),e("li",[e("code",[t._v("path")]),t._v(": a fully qualified http URL pointing to a relevant location online for the contributor")]),t._v(" "),e("li",[e("code",[t._v("email")]),t._v(": An email address")]),t._v(" "),e("li",[e("code",[t._v("role")]),t._v(": a string describing the role of the contributor. It’s "),e("code",[t._v("RECOMMENDED")]),t._v(" to be one of: "),e("code",[t._v("author")]),t._v(", "),e("code",[t._v("publisher")]),t._v(", "),e("code",[t._v("maintainer")]),t._v(", "),e("code",[t._v("wrangler")]),t._v(", and "),e("code",[t._v("contributor")]),t._v(". Defaults to "),e("code",[t._v("contributor")]),t._v(".\n"),e("ul",[e("li",[t._v("Note on semantics: use of the “author” property does not imply that that person was the original creator of the data in the data package - merely that they created and/or maintain the data package. It is common for data packages to “package” up data from elsewhere. The original origin of the data can be indicated with the "),e("code",[t._v("sources")]),t._v(" property - see above.")])])]),t._v(" "),e("li",[e("code",[t._v("organization")]),t._v(": a string describing the organization this contributor is affiliated to.")])]),t._v(" "),e("h5",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" "),e("code",[t._v("keywords")])]),t._v(" "),e("p",[t._v("An Array of string keywords to assist users searching for the package in catalogs.")]),t._v(" "),e("h5",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" "),e("code",[t._v("image")])]),t._v(" "),e("p",[t._v("An image to use for this data package. For example, when showing the package in a listing.")]),t._v(" "),e("p",[t._v("The value of the image property "),e("code",[t._v("MUST")]),t._v(" be a string pointing to the location of the image. The string must be a "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("url-or-path")]),t._v(", that is a fully qualified HTTP address, or a relative POSIX path (see "),e("RouterLink",{attrs:{to:"/data-resource/#url-or-path"}},[t._v("the url-or-path definition in Data Resource for details")]),t._v(").")],1),t._v(" "),e("h5",{attrs:{id:"created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" "),e("code",[t._v("created")])]),t._v(" "),e("p",[t._v("The datetime on which this was created.")]),t._v(" "),e("p",[t._v("Note: semantics may vary between publishers – for some this is the datetime the data was created, for others the datetime the package was created.")]),t._v(" "),e("p",[t._v("The datetime must conform to the string formats for datetime as described in "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339#section-5.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),e("OutboundLink")],1),t._v(". Example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1985-04-12T23:20:50.52Z"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);