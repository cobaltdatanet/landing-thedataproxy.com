import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, SimpleGrid, Image, Tag, HStack, Avatar, Divider, Input, InputGroup, InputLeftElement, Select, Badge } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { SearchIcon, TimeIcon, ViewIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/blog")({
  component: BlogPage,
});

function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Advanced Techniques for Web Scraping JavaScript-Heavy Websites",
      excerpt: "Learn how to effectively scrape data from modern web applications that rely heavily on JavaScript rendering, dynamic content loading, and anti-bot measures.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Technical",
      readTime: "8 min read",
      date: "Mar 15, 2025",
      views: "15.2K",
      tags: ["Web Scraping", "JavaScript", "Browser Automation", "Puppeteer"]
    },
    {
      id: 2,
      title: "Proxy Rotation Strategies for Large-Scale Data Collection",
      excerpt: "Discover how to build robust proxy rotation systems that maintain high availability, prevent IP blocking, and optimize for both performance and cost-effectiveness.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "Strategy",
      readTime: "11 min read",
      date: "Mar 8, 2025",
      views: "12.8K",
      tags: ["Proxy Management", "IP Rotation", "Data Collection", "Scaling"]
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Building Resilient Data Pipelines That Scale Automatically",
      excerpt: "How to design data collection and processing pipelines that handle failures gracefully and scale up or down based on workload demands.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "Architecture",
      readTime: "9 min read",
      date: "Mar 2, 2025",
      views: "8.4K",
      tags: ["Data Pipeline", "Resilience", "Auto-scaling", "Cloud Architecture"]
    },
    {
      id: 4,
      title: "REST vs. GraphQL: Choosing the Right API for Your Data Needs",
      excerpt: "An in-depth comparison of REST and GraphQL APIs for data collection, with practical advice on when to use each approach.",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "API",
      readTime: "7 min read",
      date: "Feb 28, 2025",
      views: "10.1K",
      tags: ["REST", "GraphQL", "API Design", "Data Integration"]
    },
    {
      id: 5,
      title: "Ethical Web Scraping: Best Practices and Legal Considerations",
      excerpt: "Guidelines for responsible data collection that respects website terms of service, user privacy, and relevant legal frameworks.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Best Practices",
      readTime: "10 min read",
      date: "Feb 22, 2025",
      views: "13.6K",
      tags: ["Ethics", "Legal", "Compliance", "Best Practices"]
    },
    {
      id: 6,
      title: "Real-time Data Processing with Kafka and Elasticsearch",
      excerpt: "How to build streaming data pipelines that process and analyze large volumes of data in real-time using Kafka and Elasticsearch.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Technology",
      readTime: "12 min read",
      date: "Feb 18, 2025",
      views: "9.3K",
      tags: ["Kafka", "Elasticsearch", "Real-time", "Stream Processing"]
    }
  ];

  const popularCategories = [
    { name: "Web Scraping", count: 28 },
    { name: "API Integration", count: 23 },
    { name: "Data Processing", count: 19 },
    { name: "Proxy Management", count: 17 },
    { name: "Best Practices", count: 15 },
    { name: "Technology", count: 14 }
  ];

  const popularTags = [
    "Web Scraping", "API", "JavaScript", "Python", "Proxy Management",
    "Data Processing", "Automation", "Machine Learning", "Cloud", "Security",
    "Best Practices", "Tutorials", "Case Studies", "Performance", "Scaling"
  ];

  return (
    <>
      {/* Blog Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6} fontWeight="medium">
            Data Insights Blog
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={10} maxW="800px" mx="auto">
            Expert articles, tutorials, and insights on web scraping, data collection,
            API integration, and proxy management best practices.
          </Text>

          {/* Featured Posts */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
            {featuredPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} _hover={{ textDecoration: "none" }}>
                <Box
                  bg="white"
                  boxShadow="md"
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    h="250px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <HStack mb={4} spacing={3}>
                      <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                        {post.category}
                      </Badge>
                      <Flex align="center">
                        <TimeIcon mr={1} color="gray.500" boxSize={3} />
                        <Text fontSize="sm" color="gray.500">{post.readTime}</Text>
                      </Flex>
                      <Flex align="center">
                        <ViewIcon mr={1} color="gray.500" boxSize={3} />
                        <Text fontSize="sm" color="gray.500">{post.views} views</Text>
                      </Flex>
                    </HStack>

                    <Heading as="h3" size="lg" mb={3} fontWeight="medium" lineHeight="1.3">
                      {post.title}
                    </Heading>

                    <Text color="gray.600" mb={5} fontSize="md">
                      {post.excerpt}
                    </Text>

                    <Flex justify="flex-end" mb={4}>
                      <Text fontSize="sm" color="gray.500">{post.date}</Text>
                    </Flex>

                    <Box>
                      {post.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          size="sm"
                          mr={2}
                          mb={2}
                          colorScheme="gray"
                          variant="subtle"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Recent Posts Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading textAlign="center" as="h2" size="xl" mb={12} fontWeight="medium">
            Recent Articles
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {recentPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} _hover={{ textDecoration: "none" }}>
                <Box
                  bg="white"
                  boxShadow="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  height="100%"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    h="180px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={5}>
                    <HStack mb={3} spacing={3}>
                      <Badge colorScheme="blue" px={2} py={0.5} borderRadius="full">
                        {post.category}
                      </Badge>
                      <Flex align="center">
                        <TimeIcon mr={1} color="gray.500" boxSize={3} />
                        <Text fontSize="xs" color="gray.500">{post.readTime}</Text>
                      </Flex>
                    </HStack>

                    <Heading as="h3" size="md" mb={3} fontWeight="medium" lineHeight="1.3">
                      {post.title}
                    </Heading>

                    <Text color="gray.600" mb={4} fontSize="sm" noOfLines={3}>
                      {post.excerpt}
                    </Text>

                    <Divider mb={4} />

                    <Flex justify="flex-end">
                      <Text fontSize="xs" color="gray.500">{post.date}</Text>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Master Web Scraping Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Download our free comprehensive guides and start building
            powerful web scrapers for your data extraction needs
          </Text>

          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Request Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://dashboard.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Blog Sidebar/Categories Section */}
      <Box py={16} bg="white">
        <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
          More From Our Blog
        </Heading>
        <Box maxW="1200px" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "7fr 3fr" }} gap={10}>
            <Box>
              <VStack spacing={8} align="stretch">
                {[...recentPosts, ...featuredPosts].slice(0, 4).map(post => (
                  <Link key={post.id} href={`/blog/${post.id}`} _hover={{ textDecoration: "none" }}>
                    <Flex
                      p={4}
                      bg="gray.50"
                      borderRadius="lg"
                      boxShadow="sm"
                      gap={5}
                      alignItems="center"
                      cursor="pointer"
                      _hover={{ bg: "gray.100" }}
                      transition="background-color 0.2s"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        w={{ base: "80px", md: "150px" }}
                        h={{ base: "80px", md: "100px" }}
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box flex="1">
                        <HStack mb={1}>
                          <Badge colorScheme="blue" size="sm">{post.category}</Badge>
                          <Text fontSize="xs" color="gray.500">{post.date}</Text>
                        </HStack>
                        <Heading as="h3" size="md" fontWeight="medium" lineHeight="1.3" mb={2}>
                          {post.title}
                        </Heading>
                        <Flex justify="flex-end">
                          <Flex align="center">
                            <TimeIcon parasitismr={1} color="gray.500" boxSize={3} />
                            <Text fontSize="xs" color="gray.500">{post.readTime}</Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box>
              <VStack spacing={8} align="stretch">
                <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Popular Categories
                  </Heading>
                  <Divider mb={4} />
                  <VStack spacing={3} align="stretch">
                    {popularCategories.map((category, index) => (
                      <Flex key={index} justify="space-between" align="center">
                        <Link color="blue.600" fontWeight="medium">
                          {category.name}
                        </Link>
                        <Badge colorScheme="blue" borderRadius="full">
                          {category.count}
                        </Badge>
                      </Flex>
                    ))}
                  </VStack>
                </Box>

                <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Popular Tags
                  </Heading>
                  <Divider mb={4} />
                  <Flex flexWrap="wrap" gap={2}>
                    {popularTags.map((tag, index) => (
                      <Tag
                        key={index}
                        colorScheme="blue"
                        variant="subtle"
                        size="md"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ bg: "blue.100" }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Box>

                <Box bg="blue.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Need Expert Help?
                  </Heading>
                  <Text mb={4}>
                    Our team can help you implement the strategies and techniques discussed in our articles.
                  </Text>
                  <Button colorScheme="blue" width="full" as="a" href="/contact-sales">
                    Contact Us
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default BlogPage;