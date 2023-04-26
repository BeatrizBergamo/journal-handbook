declare module "*.json" {
  const value: any;
  export default value;
}

declare let env: {
  BASE_URL: string;
};
