import React from 'react';
import {
  Box,
  Button,
  Text,
  Heading,
  Grid,
  GridItem,
  Flex,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
  Alert,
  AlertIcon,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { FiCheckCircle, FiDollarSign, FiPackage, FiTrendingUp, FiSettings, FiDatabase, FiServer, FiCloud } from 'react-icons/fi';

const STORAGE_KEY = "subscriptionSettings";
const PRODUCT = "proxy";

const pricingPlans = [
  { name: "Dev", price: "$100", features: ["100 requests/month", "Basic API access", "Email support"], borderColor: "blue.700", icon: FiPackage },
  { name: "SaaS", price: "$500", features: ["1,000 requests/month", "Faster response times", "Priority support"], borderColor: "blue.600", badge: "MOST POPULAR", icon: FiTrendingUp },
  { name: "Pro", price: "$2,000", features: ["1,000,000 requests/month", "Enterprise-grade performance", "Dedicated support"], borderColor: "blue.500", icon: FiSettings },
  { name: "Enterprise", price: "Custom", features: ["Unlimited requests", "Dedicated account manager", "Custom integrations"], borderColor: "blue.400", icon: FiDollarSign },
];

const additionalServices = {
  Dev: [
    { name: "Storage", price: "$0.10 per GB", features: ["Basic storage", "Limited scalability"], icon: FiDatabase },
    { name: "Hosting", price: "$0.05 per CPU/hr", features: ["Shared servers", "Best effort uptime"], icon: FiServer },
  ],
  SaaS: [
    { name: "Storage", price: "$0.08 per GB", features: ["Improved storage options", "Scalable infrastructure"], icon: FiDatabase },
    { name: "Hosting", price: "$0.04 per CPU/hr", features: ["Dedicated servers", "High uptime guarantee"], icon: FiServer },
  ],
  Pro: [
    { name: "Storage", price: "$0.06 per GB", features: ["High availability", "Scalable storage"], icon: FiDatabase },
    { name: "Hosting", price: "$0.03 per CPU/hr", features: ["Premium dedicated servers", "99.99% uptime"], icon: FiServer },
  ],
  Enterprise: [
    { name: "Storage", price: "$0.04 per GB", features: ["Enterprise-grade security", "Unlimited storage"], icon: FiDatabase },
    { name: "Hosting", price: "$0.02 per CPU/hr", features: ["Private cloud", "Custom SLA"], icon: FiServer },
  ],
};

function Pricing() {
  return (
    <Box maxW="100%" mx="auto" px={{ base: 6, md: 12 }} py={10} bg="gray.800">
      <VStack spacing={6} align="stretch">
        <Alert status="info" borderRadius="md" bg="gray.700" color="gray.300">
          <AlertIcon color="blue.500" />
          <Text fontSize="sm">Sign up for a free trial and explore our full-featured plans!</Text>
        </Alert>
        <Box w="100%" py={6} bg="gray.700" borderRadius="md" boxShadow="lg" px={6}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box>
              <Heading as="h1" size="lg" fontWeight="bold" color="gray.100">
                Start Your Free Trial
              </Heading>
              <Text fontSize="sm" color="gray.400" mt={1}>
                Experience our premium features with a 7-day free trial. No credit card required!
              </Text>
            </Box>
            <Box bg="blue.800" color="gray.300" borderRadius="md" p={5} boxShadow="lg" textAlign="left" display="flex" flexDirection="column" justifyContent="center">
              <Button bg="blue.600" color="gray.100" _hover={{ bg: "blue.500" }} variant="solid" size="sm">
                Sign Up for Free
              </Button>
            </Box>
          </Grid>
        </Box>
        
        <Tabs variant="enclosed" colorScheme="gray">
          <TabList bg="gray.700" borderRadius="md">
            {pricingPlans.map((plan, index) => (
              <Tab key={index} _selected={{ bg: "gray.600", color: "white", fontWeight: "bold" }}>
                <Icon as={plan.icon} mr={2} /> {plan.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels bg="gray.700" borderRadius="md">
            {pricingPlans.map((plan, index) => (
              <TabPanel key={index}>
                <Box p={6} border="2px solid" borderColor={plan.borderColor} borderRadius="lg" bg="gray.600">
                  {plan.badge && (
                    <Badge bg="blue.600" color="white" px={3} py={1} position="absolute" top="-12px" left="10px">
                      {plan.badge}
                    </Badge>
                  )}
                  <Heading as="h3" size="md" fontWeight="bold" mb={2} color="gray.200">
                    {plan.name}
                  </Heading>
                  <Text fontSize="lg" fontWeight="bold" color="white">{plan.price}</Text>
                  <List spacing={2} mb={6} mt={2}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} display="flex" alignItems="center">
                        <ListIcon as={FiCheckCircle} color="blue.500" boxSize={5} />
                        <Text fontSize="sm" color="gray.300">{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/proxies/pricing")({
  component: Pricing,
});

export default Pricing;
