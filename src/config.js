const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1qa4fnc6elb6p"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cwb6ckl2o8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bmPTJAhJV",
    APP_CLIENT_ID: "5ktr5emnjmqpl0v8s4qoeueq51",
    IDENTITY_POOL_ID: "us-east-1:1291cc8d-5932-4d43-afb9-853738faaef7"
  },
  STRIPE_KEY: "pk_test_qPuuxnMEofiKHh8eVEuMBF8z006Yaev4MF",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-12tmh2gogh39v"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kq69bge46m.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oxgAAIghd",
    APP_CLIENT_ID: "6ejcgq2si1smff9vjop6dik3i1",
    IDENTITY_POOL_ID: "us-east-1:88474f10-861e-42b4-a115-a429502598b5"
  },
  STRIPE_KEY: "pk_test_qPuuxnMEofiKHh8eVEuMBF8z006Yaev4MF",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
