import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ArrowUpRight, Check } from 'lucide-react-native';

export interface ExploreAppCardProps {
  appName: string;
  appCategory: string;
  appIcon?: string;
  isVerified?: boolean;
  onPress: () => void;
}

export const ExploreAppCard: React.FC<ExploreAppCardProps> = ({
  appName,
  appCategory,
  appIcon,
  isVerified = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Right Arrow - positioned absolutely */}
      <View style={styles.rightArrow}>
        <ArrowUpRight size={18} color="#7b9aaa" strokeWidth={2} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* App Icon */}
        <View style={styles.iconContainer}>
          <Image 
            source={{ 
              uri: appIcon || 'https://cms.forbole.com/uploads/Kastle_Symbolic_Logo_27731fc6bd.svg' 
            }} 
            style={styles.appIcon} 
          />
        </View>

        {/* App Info */}
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.appName} numberOfLines={1}>
              {appName}
            </Text>
            {isVerified && (
              <View style={styles.verifiedBadge}>
                <Check size={10} color="#ffffff" strokeWidth={2.5} />
              </View>
            )}
          </View>
          <Text style={styles.appCategory} numberOfLines={1}>
            {appCategory}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: '#1a303a',
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    minHeight: 88,
    marginBottom: 8,
    position: 'relative',
  },
  rightArrow: {
    position: 'absolute',
    top: 12,
    right: 13,
    zIndex: 1,
  },
  content: {
    
    flex: 1,
    gap: 12,
    paddingRight: 24, // 為右上角的箭頭留出空間
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    backgroundColor: '#00c4e7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appCategory: {
    color: '#7b9aaa',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.06,
    lineHeight: 16,
  },
});