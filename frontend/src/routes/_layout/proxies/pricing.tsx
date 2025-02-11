import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Text,
  VStack,
  Divider,
  Badge,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/proxies/pricing")({
  component: PricingPage,
});

// Proxy Pricing Rates (Per GB) for Each Product
const proxyPricing = {
  Residential: [
    { tier: "Starter", pricePerGB: "$2.00/GB", trafficLimit: "Up to 500GB" },
    { tier: "Business", pricePerGB: "$1.50/GB", trafficLimit: "Up to 2TB", badge: "Most Popular" },
    { tier: "Business Plus+", pricePerGB: "$1.25/GB", trafficLimit: "Up to 10TB" },
    { tier: "Ultra Enterprise", pricePerGB: "Custom Pricing", trafficLimit: "Unlimited" },
  ],
  "Residential Mobile": [
    { tier: "Starter", pricePerGB: "$2.50/GB", trafficLimit: "Up to 500GB" },
    { tier: "Business", pricePerGB: "$1.80/GB", trafficLimit: "Up to 2TB" },
    { tier: "Business Plus+", pricePerGB: "$1.50/GB", trafficLimit: "Up to 10TB" },
    { tier: "Ultra Enterprise", pricePerGB: "Custom Pricing", trafficLimit: "Unlimited" },
  ],
  Datacenter: [
    { tier: "Starter", pricePerGB: "$1.00/GB", trafficLimit: "Up to 5TB" },
    { tier: "Business", pricePerGB: "$0.75/GB", trafficLimit: "Up to 20TB" },
    { tier: "Business Plus+", pricePerGB: "$0.50/GB", trafficLimit: "Up to 50TB" },
    { tier: "Ultra Enterprise", pricePerGB: "Custom Pricing", trafficLimit: "Unlimited" },
  ],
  "Datacenter Mobile": [
    { tier: "Starter", pricePerGB: "$1.20/GB", trafficLimit: "Up to 5TB" },
    { tier: "Business", pricePerGB: "$0.85/GB", trafficLimit: "Up to 20TB" },
    { tier: "Business Plus+", pricePerGB: "$0.65/GB", trafficLimit: "Up to 50TB" },
    { tier: "Ultra Enterprise", pricePerGB: "Custom Pricing", trafficLimit: "Unlimited" },
  ],
  "Browser Proxy": [
    { tier: "Starter", pricePerGB: "$2.00/GB", trafficLimit: "Up to 500GB" },
    { tier: "Business", pricePerGB: "$1.50/GB", trafficLimit: "Up to 2TB" },
    { tier: "Business Plus+", pricePerGB: "$1.30/GB", trafficLimit: "Up to 10TB" },
    { tier: "Ultra Enterprise", pricePerGB: "Custom Pricing", trafficLimit: "Unlimited" },
  ],
};

function PricingPage() {
  return (
    <Container maxW="6xl" py={10}>
      {/* PAGE TITLE */}
      <Heading size="lg" textAlign="center" mb={8}>
        Proxy Billing Rates (Per GB)
      </Heading>

      {/* PRICING TABS FOR EACH PRODUCT */}
      <Tabs variant="enclosed">
        <TabList>
          {Object.keys(proxyPricing).map((product) => (
            <Tab key={product}>{product}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.keys(proxyPricing).map((product) => (
            <TabPanel key={product}>
              {/* Grid Layout for Pricing */}
              <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
                {proxyPricing[product].map((tier) => (
                  <GridItem key={tier.tier}>
                    <Box
                      p={6}
                      borderWidth="2px"
                      borderRadius="lg"
                      textAlign="center"
                      borderColor="gray.300"
                      shadow="sm"
                      transition="all 0.2s ease-in-out"
                      _hover={{ shadow: "md" }}
                      position="relative"
                    >
                      {/* Badge for Popular Plans */}
                      {tier.badge && (
                        <Badge
                          colorScheme="blue"
                          variant="solid"
                          position="absolute"
                          top="-10px"
                          left="50%"
                          transform="translateX(-50%)"
                        >
                          {tier.badge}
                        </Badge>
                      )}

                      {/* Tier Name */}
                      <Text fontSize="xl" fontWeight="bold">{tier.tier}</Text>

                      {/* Per GB Price */}
                      <Text fontSize="2xl" fontWeight="bold" color="teal.500" mt={2}>
                        {tier.pricePerGB}
                      </Text>

                      {/* Traffic Limit */}
                      <Text fontSize="md" color="gray.500">{tier.trafficLimit}</Text>

                      <Divider my={4} />
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* PRICING NOTICE */}
      <Box mt={8} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          Pricing is based on per GB usage. **Enterprise clients** can request **custom pricing & volume discounts**.
        </Text>
      </Box>
    </Container>
  );
}

export default PricingPage;
