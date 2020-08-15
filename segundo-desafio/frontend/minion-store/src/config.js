const cognito = {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8c3oAScqO",
    APP_CLIENT_ID: "37le7l62cui3bbqu73j5c3pe9j"
}

export default {
    
    Auth: {
        mandatorySignIn: true,
        region: cognito.REGION,
        userPoolId: cognito.USER_POOL_ID,
        userPoolWebClientId: cognito.APP_CLIENT_ID
    }

    
};