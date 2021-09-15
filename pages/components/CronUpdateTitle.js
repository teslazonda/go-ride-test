import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Layout, Button, Banner, Toast, Stack, Frame } from '@shopify/polaris';
import { Context } from '@shopify/app-bridge-react'

var faker = require('faker');
let fakeName1 = faker.commerce.productName();
let fakeName2 = faker.commerce.productName();
let fakeName3 = faker.commerce.productName();
let fakeName4 = faker.commerce.productName();
let fakeName5 = faker.commerce.productName();

// // Make a separate query to update the title of the product every hour
const UPDATE_TITLE = gql`
mutation {
  Product1: productUpdate(input: {
    title: "Chicken",
    id: "gid://shopify/Product/7159751311511"
  }) {
    product {
      title
      id
    }
  }


  Product2: productUpdate(input: {
    title: "Pork",
    id: "gid://shopify/Product/7159751377047"
  }) {
    product {
      title
      id
    }
  }


  Product3: productUpdate(input: {
    title: "Beef",
    id: "gid://shopify/Product/7159751573655"
  }) {
    product {
      title
      id
    }
  }

  Product4: productUpdate(input: {
    title: "Lamb",
    id: "gid://shopify/Product/7159751475351"
  }) {
    product {
      title
      id
    }
  }

  Product5: productUpdate(input: {
    title: "Turkey",
    id: "gid://shopify/Product/7159751606423"
  }) {
    product {
      title
      id
    }
  }
}
`;
fetch('https://node-go-ride.myshopify.com/admin/api/2021-07/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ UPDATE_TITLE })
})
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch((e) => {
    console.log(e)
  })







class CronUpdateTitle extends React.Component {
  static contextType = Context;

  render() {
    return ( // update product title with fake name
      <Mutation mutation={UPDATE_TITLE}>
        {(handleSubmit, { error, data }) => {
          const [hasResults, setHasResults] = useState(false);

          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );

          const showToast = hasResults && (
            <Toast
              content="Successfully updated the product names"
              onDismiss={() => setHasResults(false)}
            />
          );

          return (
            <Frame>
              {showToast}
              <Layout.Section>
                {showError}
              </Layout.Section>

            </Frame>
          );
        }}
      </Mutation>
    );
  }
}

export default CronUpdateTitle;



// mutation {
//   Product1: productUpdate(input: {
//     title: "Test Item 1",
//     id: "gid://shopify/Product/7159751311511"
//   }) {
//     product {
//       title
//       id
//     }
//   }


//   Product2: productUpdate(input: {
//     title: "Test Item 2",
//     id: "gid://shopify/Product/7159751377047"
//   }) {
//     product {
//       title
//       id
//     }
//   }


//   Product3: productUpdate(input: {
//     title: "Test Item 3",
//     id: "gid://shopify/Product/7159751573655"
//   }) {
//     product {
//       title
//       id
//     }
//   }

//   Product4: productUpdate(input: {
//     title: "Test Item 4",
//     id: "gid://shopify/Product/7159751475351"
//   }) {
//     product {
//       title
//       id
//     }
//   }

//   Product5: productUpdate(input: {
//     title: "Test Item 5",
//     id: "gid://shopify/Product/7159751606423"
//   }) {
//     product {
//       title
//       id
//     }
//   }

// }
