/** @jsx jsx */
import { Heading, Text, Flex, Stack, Avatar, Box } from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath.replace('f/', '').replace('.mdx', '');
  const title = `${frontMatter.title} - jamstackfns`;
  const url = `https://jamstackfns.com/f/${slug}`;

  return ({ children: content }) => {
    return (
      <Container>
        <NextSeo
          title={title}
          canonical={url}
          openGraph={{
            url,
            title
          }}
        />
        <Stack
          as="section"
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
            >
              <Box>
                <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
                  {frontMatter.title}
                </Heading>
                <Text fontSize="sm" color="gray.700">
                  {frontMatter.description}
                </Text>
              </Box>
              <Box
                boxShadow="0 0 0 1px #E2E8F0"
                borderRadius="50%"
                width="48px"
                mt={[2, 0]}
              >
                <Avatar
                  size="md"
                  name={frontMatter.title}
                  src={`/logos/avatars/${frontMatter.logo}`}
                />
              </Box>
            </Flex>
          </Flex>
          {content}
          <Subscribe />
        </Stack>
      </Container>
    );
  };
};
