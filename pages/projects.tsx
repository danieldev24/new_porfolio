import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import project1 from '../assets/projects/work/cryptowallet.png'
import project2 from '../assets/projects/work/currency.png'
import project3 from '../assets/projects/work/poro.png'
import project4 from '../assets/projects/work/tesla.png'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'
import githubIcon from '../assets/projects/github.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHtml5, AiOutlineArrowRight } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandReactNative, TbBrandVercel } from 'react-icons/tb'
import { SiChakraui, SiCss3, SiFlutter, SiJavascript, SiKotlin, SiMaterialui, SiPython, SiRedux, SiSupabase, SiTypescript } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { GiJetPack } from 'react-icons/gi'

type Props = {}

const Projects = (props: Props) => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack px={{ base: 8, md: 20 }} spacing={{ base: 4, md: 0 }}>
                    <Heading
                        fontSize={{ base: '4xl', md: '6xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>A few of my featured projects here</Heading>
                    <HStack>
                        <HStack>
                            <AiOutlineArrowRight />
                            <Text fontSize={{ base: 'md', md: 'lg' }}>Get the complete list at my</Text>
                        </HStack>
                        <Box pt={1}>
                            <Image src={githubIcon} alt='github icon' height='24px' width='24px' />
                        </Box>
                        <Link href='https://github.com/danieldev24' passHref>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>Github</Text></a>
                        </Link>
                    </HStack>

                    <SimpleGrid
                        columns={1}
                        spacing={{ base: 12, md: 14 }}
                        py={{ base: 4, md: 8 }}
                        rounded='xl'>

                        <ProjectBox
                            image={project1}
                            heading='Crypto Wallet'
                            data='Cross Platform for crypto to show off their information about your coin and market. 
                            I was incharge of cross platform, made using React Native, Axios and Redux.'
                            link='/projects/fake-data-generator'
                            githubLink='https://github.com/danieldev24/Crypto_Wallet_React_Native'>
                            <HStack>
                                <Icon as={TbBrandReactNative} fontSize='1.2em' color='blue.300' />
                                <Text>React Native</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiRedux} color='blue.300' />
                                <Text>Redux</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project2}
                            heading='Crypto Currency'
                            data='A crypto currency, I made as research project. Android were powered by Jetpack Compose and Clean Architecture.'
                            link='/projects/tec-mapping'
                            githubLink='https://github.com/danieldev24/CryptoCurrency'>
                            <HStack>
                                <Icon as={SiKotlin} color='blue.300' />
                                <Text>Kotlin</Text>
                            </HStack>
                            <HStack>
                                <Icon as={GiJetPack} color='blue.300' />
                                <Text>JetPack Compose</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project3}
                            heading='Poro'
                            data='Poro is a smart tool to help you be productive at work based on Podomoro. I am incharge of Android using Kotlin'
                            link='/projects/artist-booking-app'
                            githubLink='https://github.com/danieldev24/Poro'>
                            <HStack>
                                <Icon as={SiKotlin} fontSize='1.2em' color='blue.300' />
                                <Text>Kotlin</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project4}
                            heading='Tesla Connection'
                            data='A Concept Tesla`s car manage. I was working with cross platform using Flutter'
                            link='/projects/company-website'
                            githubLink='https://github.com/danieldev24/Tesla-Connect'>
                            <HStack>
                                <Icon as={SiFlutter} color='blue.300' />
                                <Text>Flutter</Text>
                            </HStack>
                        </ProjectBox>

                    </SimpleGrid>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Projects