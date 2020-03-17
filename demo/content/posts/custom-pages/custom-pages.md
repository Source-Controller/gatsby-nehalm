---
title: "Creating custom pages"
path: "/custom-pages"
tags: ["Programming"]
featuredImage: "./cover.jpg"
excerpt: Creating custom pages is easy in Nehalem - let's take a brief look.
created: 2019-07-23
updated: 2019-07-23
---

In case you want to create your own custom pages Nehalem provides a bunch of useful tools to make this easier for you.

## Basic structure

The basic structure for pages is:

```typescript jsx
import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import {Container} from "@nehalist/gatsby-theme-nehalem/src/components/common";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Page title`}
    />
    <Container>
      Your content
    </Container>
</Layout>
);

export default CustomPage;
```

The `<Layout />` component either shows a big header (like the one on the front page) or a small one (like on every other page) based on the
`bigHeader` prop.

The `<SEO />` component takes care of optimizing everything in terms of SEO. The `location` prop comes from Gatsby.

### Using custom props

Components often have some props. The `FunctionDecorator` interface allows creating fully typed components like this:

```typescript jsx
import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Container from "@nehalist/gatsby-theme-nehalem/src/components/common";

interface CustomPageProps { // highlight-line
  location: Location;
  showConditionalText: boolean;
}

const CustomPage: FunctionComponent<CustomPageProps> = ({showConditionalText, location}) => ( // highlight-line
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Page title`}
    />
    <Container>
      Your content
      {showConditionalText && <>This text is only shown when showConditionalText is true </>} // highlight-line
    </Container>
</Layout>
);

export default CustomPage;
```

### The Subheader component

Some components, like the `PageTemplate` use a small component for a stylish subheader:

```typescript jsx
import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Container from "@nehalist/gatsby-theme-nehalem/src/components/common";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Page title`}
    />
    <Subheader title={`Page title`} subtitle={`Something else`} /> // highlight-line
    <Container>
      Your content
    </Container>
</Layout>
);

export default CustomPage;
```

---

*Cover by [@christopher_burns](https://unsplash.com/@christopher__burns)*
