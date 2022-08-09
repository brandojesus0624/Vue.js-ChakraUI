import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link
} from "@chakra-ui/react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Flex
        direction="column"
        alignItems="center"
        color="whiteAlpha.900"
        bg="gray.800"
        w="100vw"
        h="100vh"
        p="16"
      >
        <Flex direction={["column", "row"]} gap="8">
          <Link href="https://chakra-ui.com">
            <Image
              src="data:image/svg+xml,%3Csvg viewBox='0 0 257 257' xmlns='http://www.w3.org/2000/svg' class='css-89iovl'%3E%3Crect width='257' height='257' rx='128.5' fill='url(%23mark)'%3E%3C/rect%3E%3Cpath d='M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z' fill='%23fff'%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id='mark' x1='128.5' x2='128.5' y2='257' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237BCBD4'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%2329C6B7'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
              alt="Chakra Logo"
              w="72px"
              borderRadius="50%"
              _hover={{
                filter: "drop-shadow(0 0 2em #42c7c0aa)",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://chakra-ui.com">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="Chakra Logo"
              w="72px"
              _hover={{
                filter: "drop-shadow(0 0 2em #61dafbaa)",
                cursor: "pointer",
              }}
            />
          </Link>
        </Flex>
        <Flex
          direction="column"
          my="12"
          textAlign="center"
          gap="8"
          alignItems="center"
        >
          <Heading as="h1" size="2xl">
            Chakra UI + React 
          </Heading>
          <Text>
            This project is scafollded using
            <Link href="https://github.com/vedantnn71/create-chakra">
              <>
                <span style={{ fontFamily: "monospace", cursor: "pointer" }}>
                  {" "}
                  create-chakra@latest
                </span>
                .
              </>
            </Link>{" "}
            <br />
            Please leave a star if you liked this.
          </Text>
          <Button
            bg="gray.700"
            color="whiteAlpha.800"
            w="fit-content"
            px="8"
            py="4"
            _hover={{ bg: "gray.700", border: "1px", borderColor: "blue.500" }}
            _active={{ bg: "gray.700" }}
            onClick={() => setCount(count + 1)}
          >
            count is {count}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
