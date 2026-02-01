declare module '@paypal/checkout-server-sdk' {
  export namespace core {
    class PayPalEnvironment {
      constructor(clientId: string, clientSecret: string);
    }
    
    class SandboxEnvironment extends PayPalEnvironment {}
    class LiveEnvironment extends PayPalEnvironment {}
    
    class PayPalHttpClient {
      constructor(environment: PayPalEnvironment);
      execute(request: any): Promise<any>;
    }
  }
  
  export namespace orders {
    class OrdersCreateRequest {
      constructor(requestBody?: any);
      prefer(prefer: string): void;
      requestBody(body: any): void;
    }
    
    class OrdersCaptureRequest {
      constructor(orderId: string);
      requestBody(body: any): void;
    }
    
    class OrdersGetRequest {
      constructor(orderId: string);
    }
  }
}
