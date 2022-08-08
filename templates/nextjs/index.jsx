import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";

const Home = () => (
  <Box>
    <Head>
      <title>Create Chakra</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex direction="column">
      <Box as="header" py="16">
        <Heading size="5xl" fontWeight="bold" align="center" mb="6">
          Create Chakra App
        </Heading>
        <Flex direction="row" justify="center" alignItems="center" gap="4">
          <Link
            className="github-button"
            href="https://github.com/vedantnn71/create-chakra-app"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star vedantnn71/create-chakra-app on GitHub"
          >
            Star
          </Link>
          <Link
            className="github-button"
            href="https://github.com/vedantnn71/create-chakra-app/discussions"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-icon="octicon-comment-discussion"
            data-size="large"
            aria-label="Discuss vedantnn71/create-chakra-app on GitHub"
          >
            Discuss
          </Link>
        </Flex>
      </Box>

      <Flex as="main" grow="1">
        <Box as="section" textAlign="center" alignItems="center">
          <Heading size="3xl" fontWeight="medium">
            Next.js Project Created using{" "} <Link href="https://nextjs.org/docs/api-reference/create-next-app" target="_blank" className="text-indigo-300" >
              create-next-app
            </Link>
          </Heading>
          <Text mb="6">
            Officially maintained by the creators of Next.js
          </Text>
        </Box>
      </Flex>

      <Box as="footer" px="8" py="12" border="2" borderColor="gray.800">
        <div className="px-8 font-medium text-center">
          <a href="https://github.com/vedantnn71/create-chakra-app">
            Create Chakra App
          </a>
        </div>
      </Box>
    </Flex>
    <Script src="https://buttons.github.io/buttons.js" />
  </Box>
);

export default Home;
