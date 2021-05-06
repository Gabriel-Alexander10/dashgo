import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex algin="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Alexander</Text>
          <Text color="gray.300" fontSize="small">
            gabrielmendes290@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Alexander"
        src="https://github.com/diego3g.png"
      />
    </Flex>
  );
}
