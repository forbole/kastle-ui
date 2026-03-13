import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { ExternalLink } from 'lucide-react-native';
import { ExploreAppCard, ExploreAppCardProps } from '../ExploreAppCard/ExploreAppCard';

export interface VerifiedApp {
  id: string;
  appName: string;
  appCategory: string;
  appIcon?: ImageSourcePropType;
  url?: string;
  isVerified?: boolean;
}

export interface ExploreVerifiedAppsProps {
  apps?: VerifiedApp[];
  onAppPress?: (app: VerifiedApp) => void;
  onSubmitAppPress?: () => void;
}



export const ExploreVerifiedApps: React.FC<ExploreVerifiedAppsProps> = ({
  apps = [],
  onAppPress,
  onSubmitAppPress,
}) => {
  const handleAppPress = (app: VerifiedApp) => {
    onAppPress?.(app);
  };

  const handleSubmitPress = () => {
    onSubmitAppPress?.();
  };

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Verified Apps</Text>
      </View>

      {/* Apps Grid */}
      <View style={styles.appsGrid}>
        {apps.map((app, index) => (
          <View key={app.id} style={styles.appCardWrapper}>
            <ExploreAppCard
              appName={app.appName}
              appCategory={app.appCategory}
              appIcon={app.appIcon}
              isVerified={app.isVerified}
              onPress={() => handleAppPress(app)}
            />
          </View>
        ))}
      </View>

      {/* Submit Link */}
      <TouchableOpacity style={styles.submitLinkContainer} onPress={handleSubmitPress}>
        <Text style={styles.submitLinkText}>
          <Text style={styles.submitLinkNormal}>Want your app listed? </Text>
          <Text style={styles.submitLinkHighlight}>Submit it now!</Text>
        </Text>
        <ExternalLink size={16} color="#13dcff" strokeWidth={2} style={styles.externalLinkIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9eb7c4',
    lineHeight: 16,
  },
  appsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 12,
  },
  appCardWrapper: {
    width: '48%', // Ensure 2 cards per row
    minWidth: 0, // Prevent overflow
  },
  submitLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 4,
  },
  submitLinkText: {
    fontSize: 14,
    lineHeight: 16,
    flexWrap: 'wrap',
  },
  externalLinkIcon: {
    marginTop: -1, // Fine-tune vertical alignment with text
  },
  submitLinkNormal: {
    color: '#4b7d92',
    fontWeight: '400',
  },
  submitLinkHighlight: {
    color: '#13dcff',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});