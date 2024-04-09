# Next.js, MongoDB, bcrypt, JWT, and Mailtrap Project

This project is built using Next.js and integrates MongoDB for database operations, bcrypt for password hashing, JWT for authentication, and Mailtrap to simulate email sending in a development environment.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application in action.

## Features

- User Authentication: Sign up, sign in, and sign out functionality using JWT.
- Password Hashing: Secure password hashing using bcrypt.
- Email Simulation: Email simulation for development purposes with Mailtrap.
- Database Integration: MongoDB integration for storing and managing user data.

## Configuration

Ensure you have the following environment variables configured in your `.env` file:

- `MONGODB_URI`: Your MongoDB connection string.
- `DOMAIN`: Your localhost url connection string and in production update the url with production url.
- `JWT_SECRET`: A secret key for JWT signing and verification.
- `MAILTRAP_USER`: Your Mailtrap username.
- `MAILTRAP_PASS`: Your Mailtrap password.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## Deployment

For deployment instructions and best practices, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## License

This project is open-sourced under the MIT license.
