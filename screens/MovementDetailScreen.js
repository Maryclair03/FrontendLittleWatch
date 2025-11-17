import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function MovementDetailScreen({ navigation, route }) {
  const { status = 'Resting', position = 'Back' } = route.params || {};
  


  const getActivityColor = (activity) => {
    switch(activity) {
      case 'Moving': return '#FF9800';
      default: return '#999';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0091EA" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Body Movement</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Current Status Card */}
        <View style={styles.currentCard}>
          <Text style={styles.cardLabel}>Current Status</Text>
          
        

        

          {/* Activity Status */}
          <View style={styles.statusRow}>
            <View style={[styles.iconContainer, { backgroundColor: getActivityColor(status) + '20' }]}>
              <Ionicons 
                name={status === 'Moving' ? 'walk' : status === 'Sleeping' ? 'moon' : 'pause'} 
                size={40} 
                color={getActivityColor(status)} 
              />
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.statusLabel}>Activity Status</Text>
              <Text style={[styles.statusValue, { color: getActivityColor(status) }]}>
                {status}
              </Text>
            </View>
          </View>
        </View>

     
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0091EA',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  currentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  statusInfo: {
    flex: 1,
  },
  statusLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  statusValue: {
    fontSize: 28,
    fontWeight: '700',
  },
  warningText: {
    fontSize: 13,
    color: '#FF5252',
    marginTop: 4,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 20,
  },
  guideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  guideItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  guideContent: {
    marginLeft: 12,
    flex: 1,
  },
  guideTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  guideText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    textAlign: 'center',
  },
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  timelineItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  timelineTime: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  timelineTimeText: {
    fontSize: 13,
    color: '#999',
    marginLeft: 6,
  },
  timelineDetails: {
    flex: 1,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timelineText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  noteCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  noteText: {
    flex: 1,
    fontSize: 13,
    color: '#0091EA',
    marginLeft: 12,
    lineHeight: 20,
  },
});