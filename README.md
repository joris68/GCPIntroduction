# GCPIntroduction RESTful APIs


# Prerequisites

1. GCP Account

# Background

We will use following technologies:
1. OpenAPI Spec
2. API Gateway
3. Serverless Compute with Node runtime
4. Terraform

## What is openAPI?

standard for building and documenting Restful APIs (language-agnostic)

APIs can be represented as trees:

![OpenAPI Map](assets/OpenApi_map.png)


A more detailed look on the obejcts:

![OpenAPI Obeject](assets/OpenApI_object.png)

## Api Gateway

### Managed Tasks by an API Gateway
- **Authentication**: Ensures that API calls are made by authorized users.
- **Routing**: Directs incoming API calls to the appropriate backend services.
- **Rate Limiting**: Prevents API overuse by restricting the number of requests a user can make in a certain time frame.
- **Billing**: Integrates with billing systems to manage charges for API usage.
- **Monitoring**: Keeps track of API performance and usage.
- **Analytics**: Provides insights into API usage patterns and performance metrics.


### Key Ideas and Concepts
- **Decoupling Client and Backend**: An API gateway abstracts the backend service details from the client, simplifying client integration.
- **Microservices Architecture Support**: Facilitates communication between microservices, essential in DevOps environments where services are frequently updated and deployed.
- **Serverless Support**: Manages serverless functions and applications, handling the execution of serverless code in response to events.
- **Scalability and Flexibility**: Supports the scaling of backend services without impacting the client interface.


## Serverless

important key-words:
- event driven
- SaaS

![Serverless Services](assets/Serverless.png)



Here’s a simple analogy to make it easier to understand how serverless computing works:

Think of serverless like getting water to your home. You could dig your own well, test the water quality, and install and maintain all the external plumbing needed to run it into the house. Or, you can connect to your city’s main water supply. You just turn the water tap and get as much water as you want exactly when you need it, and the city sends you a monthly bill for the exact amount of water you consume.

