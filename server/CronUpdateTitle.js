const axios = require('axios').default; // using axios for API calls
const faker = require('faker');
const cron = require('node-cron');

async function checkValue() {
let randomColor = faker.commerce.productAdjective();
  try {
  const { data: checkResponse } = await axios.put('https://SHOPIFY_APP_API_KEY:SHOPIFY_APP_API_SECRET@node-go-ride.myshopify.com/admin/api/2021-07/products/7159751311511.json',{
      "product": {
        "id":  7159751311511,
        "title": `Fake T-shirt ${randomColor}`
      }
  })
  console.log(checkResponse);
}
  catch (err) {
    console.warn(err);
  }
};
const CronJob = () => {
cron.schedule('0 * * * *', () => {
  console.log('running a task every minute');
  checkValue();
});
}
export {CronJob, checkValue}
// var faker = require('faker');

// let fakeName1 = faker.commerce.productName();
// console.log(fakeName1)
// const variables = {
//   "input": { "id": "gid://shopify/Product/7159751311511", "title": `new` }
// }
// // Make a separate query to update the title of the product every hour
// const UPDATE_TITLE = gql`
// mutation productUpdate1($input: ProductInput!) {
//   update1: productUpdate(input: $input) {
//     product1: product {
//       id
//       title
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }
// `;
// request('https://node-go-ride.myshopify.com/admin/api/2021-07/graphql.json', UPDATE_TITLE, variables).then((data) => console.log(data))
// function updateTitle({ variables }) {
//   const { loading, error, data } = useQuery(UPDATE_TITLE, {
//     variables: { variables },
//     pollInterval: 500,
//   });

//   if (loading) return null;
//   if (error) return `Error! ${error}`;

//   return (
//     data.UPDATE_TITLE.title
//   );
// }
// updateTitle();
// curl - X POST \
// https://{shop}.myshopify.com/admin/api/2021-07/graphql.json \
// -H 'Content-Type: application/graphql' \
// -H 'X-Shopify-Access-Token: {access_token}' \
// -d '
// {
//   products(first: 5) {
//       edges {
//         node {
//         id
//         handle
//       }
//     }
//       pageInfo {
//       hasNextPage
//     }
//   }
// }
// '
// // axios.post('https://node-go-ride.myshopify.com/admin/api/2021-07/graphql.json', {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ UPDATE_TITLE, variables })
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// fetch('https://node-go-ride.myshopify.com/admin/api/2021-07/graphql.json', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     // "Access-Control-Allow-Origin": "*",
//     // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
//     // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
//   },

//   body: JSON.stringify({ UPDATE_TITLE })
// })
//   .then(response => response.json())
//   .then(data => {
//     return data
//   })
//   .catch((e) => {
//     console.log(e)
//   })









// // mutation {
// //   Product1: productUpdate(input: {
// //     title: "Test Item 1",
// //     id: "gid://shopify/Product/7159751311511"
// //   }) {
// //     product {
// //       title
// //       id
// //     }
// //   }


// //   Product2: productUpdate(input: {
// //     title: "Test Item 2",
// //     id: "gid://shopify/Product/7159751377047"
// //   }) {
// //     product {
// //       title
// //       id
// //     }
// //   }


// //   Product3: productUpdate(input: {
// //     title: "Test Item 3",
// //     id: "gid://shopify/Product/7159751573655"
// //   }) {
// //     product {
// //       title
// //       id
// //     }
// //   }

// //   Product4: productUpdate(input: {
// //     title: "Test Item 4",
// //     id: "gid://shopify/Product/7159751475351"
// //   }) {
// //     product {
// //       title
// //       id
// //     }
// //   }

// //   Product5: productUpdate(input: {
// //     title: "Test Item 5",
// //     id: "gid://shopify/Product/7159751606423"
// //   }) {
// //     product {
// //       title
// //       id
// //     }
// //   }

// // }
