import { View, Text, TextInput, Image, ScrollView, TouchableHighlight } from "react-native";
import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput style={styles.searchControl} placeholder="Location . Date . Add guest" />
          </View>
          <View style={styles.searchButton}><Feather name="search" size={24} color="white" /></View>
        </View>
      </View>

      <View style={{ height: 100, backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image source={require("@/assets/images/mansion.png")} style={{ width: 40, height: 40 }} />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <TouchableHighlight style={styles.showMoreButton}>
          <Text style={styles.showMoreButtonText}>Show more</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Home;