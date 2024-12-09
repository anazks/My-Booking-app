import React, { useRef } from 'react';
import Nav from '@/components/NavBar.tsx/Nav';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Banner from '@/components/Banner.tsx/Banner';
import MostVisited from '@/components/MosetVisited/MostVisited';
import TrendingHairstyle from '@/components/TrendingHairstyle/TrendingHairstyle';
import HappyCustomers from '@/components/HappyCustomers/HappyCustomers';

const { width } = Dimensions.get('window');

const Home = () => {
  const carouselRef = useRef(null);
  const trendingRef = useRef(null);
  const customersRef = useRef(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [currentCustomerIndex, setCurrentCustomerIndex] = React.useState(0);

  const banners = [
    { id: 1, image: 'https://static.vecteezy.com/system/resources/previews/000/267/866/original/vector-special-offer-creative-sale-banner-design.jpg' },
    { id: 2, image: 'https://static.vecteezy.com/system/resources/previews/000/558/582/original/vector-banner-sale-special-offer-abstract-purple-and-yellow-color-background-design-concept.jpg' },
    { id: 3, image: 'https://static.vecteezy.com/system/resources/previews/002/792/767/large_2x/creative-offer-design-banner-design-template-vector.jpg' },
  ];

  const trendingStyles = [
    {
      id: 1,
      image: 'https://i.pinimg.com/originals/9d/12/b5/9d12b5969cd481150331d5a651a3426f.png',
      description: 'Modern Fade Hairstyle',
    },
    {
      id: 2,
      image: 'https://eleganthaircuts.com/wp-content/uploads/2020/07/cool-haircuts-for-boys-2021-quiff-with-short-sides-1.jpg',
      description: 'Classic Pompadour',
    },
    {
      id: 3,
      image: 'https://eleganthaircuts.com/wp-content/uploads/2020/07/cool-haircuts-for-boys-2021-quiff-with-short-sides-1.jpg',
      description: 'Textured Crop Cut',
    }
  ];

  const happyCustomers = [
    {
      id: 1,
      image: 'https://eleganthaircuts.com/wp-content/uploads/2020/07/cool-haircuts-for-boys-2021-quiff-with-short-sides-1.jpg',
      name: 'John Doe',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/originals/af/f7/d4/aff7d4c347d6bb58f8ae15ecdc7e5258.jpg',
      name: 'Jane Smith',
    },
    {
      id: 3,
      image: 'https://content.latest-hairstyles.com/wp-content/uploads/teen-boy-forward-texture-for-wavy-hair.jpg',
      name: 'Michael Lee',
    },
    {
      id: 3,
      image: 'https://content.latest-hairstyles.com/wp-content/uploads/teen-boy-forward-texture-for-wavy-hair.jpg',
      name: 'Michael Lee',
    },
    {
      id: 3,
      image: 'https://content.latest-hairstyles.com/wp-content/uploads/teen-boy-forward-texture-for-wavy-hair.jpg',
      name: 'Michael Lee',
    }
  ];

  const salonImages = [
    { id: 1, image: 'https://media.allure.com/photos/5890d754a08420c838db65e1/master/pass/WesWall1Edit.jpg', title: 'Luxury Salon' },
    { id: 2, image: 'https://media.allure.com/photos/5890d754a08420c838db65e1/master/pass/WesWall1Edit.jpg', title: 'Modern Cuts' },
    { id: 3, image: 'https://media.allure.com/photos/5890d754a08420c838db65e1/master/pass/WesWall1Edit.jpg', title: 'Elegant Styles' },
  ];

  React.useEffect(() => {
    const bannerInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(nextIndex);

      if (carouselRef.current) {
        carouselRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(bannerInterval);
  }, [currentIndex, banners.length]);

  React.useEffect(() => {
    const cardInterval = setInterval(() => {
      const nextCardIndex = (currentCardIndex + 1) % trendingStyles.length;
      setCurrentCardIndex(nextCardIndex);

      if (trendingRef.current) {
        trendingRef.current.scrollToIndex({
          index: nextCardIndex,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(cardInterval);
  }, [currentCardIndex, trendingStyles.length]);

  React.useEffect(() => {
    const customerInterval = setInterval(() => {
      const nextCustomerIndex = (currentCustomerIndex + 1) % happyCustomers.length;
      setCurrentCustomerIndex(nextCustomerIndex);

      if (customersRef.current) {
        customersRef.current.scrollToIndex({
          index: nextCustomerIndex,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(customerInterval);
  }, [currentCustomerIndex, happyCustomers.length]);

  const renderBanner = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.bannerImage} />
  );

  const renderTrendingStyle = ({ item }) => (
    <View style={styles.trendingCard}>
      <Image source={{ uri: item.image }} style={styles.trendingImage} />
      <Text style={styles.trendingText}>{item.description}</Text>
    </View>
  );

  const renderCustomer = ({ item }) => (
    <View style={styles.customerCard}>
      <Image source={{ uri: item.image }} style={styles.customerImage} />
      <Text style={styles.customerName}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>


      <Nav/>

      <Banner banners={banners} />

      {/* Most Visited Shops */}
      <MostVisited salonImages={salonImages} />

      {/* Trending Hairstyles Section */}
      <TrendingHairstyle trendingStyles={trendingStyles} />

      {/* Happy Customers Section */}
      <HappyCustomers customers={happyCustomers} />

      {/* About Us Section */}
      <View style={styles.aboutUsSection}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.aboutUsText}>
          We are a leading provider of high-quality haircuts and styling services. Our team of expert
          stylists is committed to providing you with the best possible experience. We take pride in
          offering the latest trends, cutting-edge techniques, and personalized consultations to make
          sure you leave feeling your absolute best.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Developed by <Text style={styles.footerHighlight}>Your Company</Text>
        </Text>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderColor: '#daa520',
    borderWidth: 0.5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#daa520',
    fontSize: 16,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 10,
  },
  carouselContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: width - 20,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bookNowSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  premiumCard: {
    width: 200,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#daa520',
  },
  premiumImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  premiumTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  premiumBadgeText: {
    color: 'gold',
    fontSize: 12,
    marginLeft: 5,
  },
  premiumButton: {
    backgroundColor: '#daa520',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  premiumButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  trendingContainer: {
    marginTop: 20,
  },
  trendingCard: {
    width: 180,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    padding: 10,
    borderColor: '#daa520',
    borderWidth: 1,
  },
  trendingImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  trendingText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  customerContainer: {
    marginTop: 20,
  },
  customerCard: {
    width: 100,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    padding: 10,
    borderWidth:1,
    borderColor:'gold'
  },
  customerImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  customerName: {
    color: '#daa520',
    fontSize: 14,
    textAlign: 'center',
  },
  aboutUsSection: {
    marginTop: 20,
  },
  aboutUsText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#333',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  footerHighlight: {
    color: '#daa520',
    fontWeight: 'bold',
  },
});
