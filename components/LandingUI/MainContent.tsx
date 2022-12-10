import { Button, Heading, HStack, Stack, Text, useColorModeValue, Tooltip, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { GiCoffeePot } from 'react-icons/gi'

type Props = {}

export const MainContent = (props: Props) => {
    const emphasis = useColorModeValue('orange.500', 'cyan.400')
    const headingColor = useColorModeValue('linear(to-r, pink.200, blue.200)', 'linear(to-r, pink.200, blue.700)')
    const currentYear = new Date().getFullYear()
    const professionalYears = currentYear - 2019

    return (
        <Stack px='12%' justify={'center'} w='full' height={{ base: '100vh', md: '100vh' }}>
            <Stack spacing={{ base: 4, md: 10 }} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize={{ base: 'lg', md: 'xl' }}>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize={{ base: '6xl', md: '8xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>
                        Le Tran Hoang Son
                    </Heading>
                    <Heading as='p' fontSize='5xl'
                        display={{ base: 'none', md: 'flex' }}
                        bgGradient='linear(to-r, pink.200, blue.700)'
                        bgClip='text'>
                        <HStack spacing={0}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Typewriter
                                options={{
                                    strings: ['software engineer', 'ui/ux student'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </HStack>
                    </Heading>
                    <Heading as='p' fontSize='2xl'
                        display={{ base: 'flex', md: 'none' }}
                        bgGradient='linear(to-r, pink.200, blue.500)'
                        bgClip='text'>
                        <HStack spacing={0}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Typewriter
                                options={{
                                    strings: ['software developer', 'product manager', 'ui/ux designer', 'artist'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </HStack>
                    </Heading>
                </Stack>
                <Text as='p' fontSize={{ base: 'md', md: 'lg' }} color='gray.500'>
                    I'm a software developer with {professionalYears} years now
                    and currently working as a <b>Mobile Developer</b> that focuses on{' '}
                    <b>Android</b>,{' '}
                    <Tooltip
                        label="Ha!. I focus on Flutter with GetX Pattern and a littel bit React Native"
                        aria-label="Cross PlatForm?"
                        hasArrow
                    >
                        <Text as="span" variant="emphasis">
                            <b>Cross Platform</b>
                        </Text>
                    </Tooltip>{' '}
                    and even <b>a little bit Backend</b> stuff now, how time flies!
                    <br />
                    I help create applications that address customer needs and solve complex business challenges
                    Here are few technologies that are cup of my{' '}
                    <Tooltip
                        label="I only drink tea if I needed too!"
                        aria-label="I hate Tea!"
                        hasArrow
                    >
                        <Text as="span" variant="emphasis" textDecorationLine="line-through">
                            tea
                        </Text>
                    </Tooltip>{' '}
                    coffee <Icon as={GiCoffeePot} color={emphasis} />.
                    <br />
                    I&apos;m a lifelong learner (currently taking a few courses on UI/UX) and love to read,
                    travel and explore new places and cultures.
                </Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    <Link href='/contact'>
                        <HStack>
                            <Text>Get in touch</Text>
                            <FaTelegramPlane />
                        </HStack>
                    </Link>
                </Button>
            </Stack>
        </Stack>
    )
}