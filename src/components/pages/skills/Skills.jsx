import { Box, Heading, SimpleGrid, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./button/Button";
import SkillBox from "./SkillBox";
import html from './skillsImage/html.svg'
import css from './skillsImage/css.svg'
import bootstrap from './skillsImage/bootstrap.svg'
import express from './skillsImage/express.svg'
import git from './skillsImage/git.svg'
import javaScript from './skillsImage/js.svg'
import mongo from './skillsImage/mongo.svg'
import nodejs from './skillsImage/nodejs.svg'
import reactjs from './skillsImage/reactjs.svg'
import typescriptlogo from './skillsImage/typescriptlogo.svg'



const skillSet =[
  {title:"HTML",src:html},
  {title:"CSS",src:css},
  {title:"Bootstrap",src:bootstrap},
  {title:"Express",src:express},
  {title:"Git",src:git},
  {title:"JavaScript",src:javaScript},
  {title:"MongoDB",src:mongo},
  {title:"Nodejs",src:nodejs},
  {title:"Reactjs",src:reactjs},
  {title:"Typescript",src:typescriptlogo},
]

const Skills = () => {
  return (
    <VStack
      py={50}
      id="skills"
      px={{ base: 10, lg: 100 }}
      bg={useColorModeValue("purple.100", "black.500")}
    >
      <Heading
        fontSize="3xl"
        mb={5}
        py={50}
        textDecoration="underline"
        textDecorationColor="red"
        textUnderlineOffset="20px"
      >
        Skills
      </Heading>
    <SimpleGrid
    columns={{base:2,md:3,lg:5}} spacing={10}
    >
      {skillSet?.map((skill,index) =><SkillBox key={index} {...skill}/>)}
    </SimpleGrid>
    </VStack>
  );
};

export default Skills;
