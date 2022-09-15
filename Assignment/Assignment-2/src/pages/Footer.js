import { 
    Heading,
    Badge,
    Flex,
    Avatar,
    Text,
    Box
 } from '@chakra-ui/react'

function Footer(){
    return(
        <>
        <Heading 
            as='h5' 
            size='sm' 
            justifyContent='center' 
            textAlign='center'
            padding='10px'
            >
                About Me
        </Heading>
        <Flex justifyContent='center' padding='10px'>
            <Avatar src='https://img.icons8.com/color/48/000000/administrator-male--v1.png' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                Dwi Samsiarto
                <Badge ml='1' colorScheme='green'>
                    Newbie Javascript
                </Badge>
                </Text>
                <Text fontSize='sm'>Front End Developer Enthusiast</Text>
            </Box>
        </Flex>
        </>
    )
}

export default Footer;
