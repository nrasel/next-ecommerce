/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env:{
    "BASE_URL":"http://localhost:3000",
    "MONGODB_URL":"mongodb+srv://devat:RfSchbWBctPgT1RU@cluster0.gzjd3.mongodb.net/?retryWrites=true&w=majority"
  }
}



module.exports = nextConfig
