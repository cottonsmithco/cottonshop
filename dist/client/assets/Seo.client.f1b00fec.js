import{s as h,b as y,z as u,j as e}from"./vendor.6dd26a1e.js";function v({shopName:i,product:t}){var s,p,l,m,d;const{locale:f}=h(),$=f.split(/[-_]/)[0];if(t){const g=t.variants.edges[0].node,r=g.priceV2,n=(s=t.images.edges[0])==null?void 0:s.node,a=(l=(p=t.seo)==null?void 0:p.title)!=null?l:t.title,o=(d=(m=t.seo)==null?void 0:m.description)!=null?d:t.description,c=typeof window=="undefined"?"":window.location.href;return y(u,{children:[e("title",{children:a}),e("meta",{name:"description",content:o}),c&&e("meta",{property:"og:url",content:c}),e("meta",{property:"og:title",content:a}),e("meta",{property:"og:type",content:"product"}),e("meta",{property:"og:description",content:o}),e("meta",{property:"og:price:amount",content:r.amount}),e("meta",{property:"og:price:currency",content:r.currencyCode}),n&&e("meta",{property:"og:image",content:n.url}),n&&e("meta",{property:"og:image:secure_url",content:n.url}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:title",content:a}),e("meta",{name:"twitter:description",content:o}),e("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${t.title}",
            "image": [
              ${n?`"${n.url}"`:""}
            ],
            "description": "${o}",
            "brand": {
              "@type": "Brand",
              "name": "${t.vendor}"
            },
            "offers": {
              "@type": "Offer",
              "url": "${c}",
              "priceCurrency": "${r.currencyCode}",
              "price": "${r.amount}",
              "availability": "https://schema.org/${g.availableForSale?"InStock":"OutOfStock"}"
            }
          }
        `})]})}return y(u,{defaultTitle:i,titleTemplate:`%s - ${i}`,children:[e("html",{lang:$}),e("meta",{property:"og:site_name",content:i})]})}export{v as default};
//# sourceMappingURL=Seo.client.f1b00fec.js.map
