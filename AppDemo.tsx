import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ExampleButton } from './src/components/ExampleButton';

export default function App() {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} pressed!`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Kastle UI Component Library</Text>
      <Text style={styles.subtitle}>React Native + Expo + Storybook</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Component Examples</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Primary Buttons:</Text>
          <View style={styles.buttonRow}>
            <ExampleButton
              title="Small"
              size="small"
              variant="primary"
              onPress={() => handleButtonPress('Small Primary')}
            />
            <ExampleButton
              title="Medium"
              size="medium"
              variant="primary"
              onPress={() => handleButtonPress('Medium Primary')}
            />
            <ExampleButton
              title="Large"
              size="large"
              variant="primary"
              onPress={() => handleButtonPress('Large Primary')}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Secondary Buttons:</Text>
          <View style={styles.buttonRow}>
            <ExampleButton
              title="Small"
              size="small"
              variant="secondary"
              onPress={() => handleButtonPress('Small Secondary')}
            />
            <ExampleButton
              title="Medium"
              size="medium"
              variant="secondary"
              onPress={() => handleButtonPress('Medium Secondary')}
            />
            <ExampleButton
              title="Large"
              size="large"
              variant="secondary"
              onPress={() => handleButtonPress('Large Secondary')}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Outline Buttons:</Text>
          <View style={styles.buttonRow}>
            <ExampleButton
              title="Small"
              size="small"
              variant="outline"
              onPress={() => handleButtonPress('Small Outline')}
            />
            <ExampleButton
              title="Medium"
              size="medium"
              variant="outline"
              onPress={() => handleButtonPress('Medium Outline')}
            />
            <ExampleButton
              title="Large"
              size="large"
              variant="outline"
              onPress={() => handleButtonPress('Large Outline')}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Disabled Buttons:</Text>
          <View style={styles.buttonRow}>
            <ExampleButton
              title="Disabled Primary"
              variant="primary"
              disabled={true}
              onPress={() => handleButtonPress('Disabled Primary')}
            />
            <ExampleButton
              title="Disabled Outline"
              variant="outline"
              disabled={true}
              onPress={() => handleButtonPress('Disabled Outline')}
            />
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          📱 This app showcases the Button component from Kastle UI library
        </Text>
        <Text style={styles.infoText}>
          🌐 Run `npm run preview` in browser to view Storybook
        </Text>
        <Text style={styles.infoText}>
          📖 Check README.md for more information
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  row: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  info: {
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#1976d2',
    marginBottom: 8,
    textAlign: 'center',
  },
});