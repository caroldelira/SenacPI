import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const reportData = {
  labels: ["Carnes", "Limpeza", "Laticínios"],
  data: [25, 15, 60],
  color: ["#F765A3", "#A155B9", "#16BFD6"],
  total: "2.356,87"
};

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};


export function ReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Relatórios</Text>
      {/* Botões dos meses */}
      <View style={styles.monthsContainer}>
        {["Jan", "Fev ", "Mar", "Abr", "Mai", "Jun"].map((month) => (
          <TouchableOpacity key={month} style={styles.monthButton}>
            <Text style={styles.monthButtonText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.monthsContainer}>
        {["Jul ", "Ago", "Set ", "Out", "Nov ", "Dez "].map((month) => (
          <TouchableOpacity key={month} style={styles.monthButton}>
            <Text style={styles.monthButtonText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summaryContainer}>

      <View style={styles.containerText}>
        <Text style={styles.titleReport}>JANEIRO </Text>
        <Text style={styles.amount}>R$ {reportData.total}</Text>
      </View>

      {/* Resumo e gráfico */}
      
        <PieChart
          data={reportData.labels.map((label, index) => ({
            name: label,
            population: reportData.data[index],
            color: reportData.color[index],
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }))}
          width={400}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 10]}
          absolute
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  containerText: {
    textAlign: 'left',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: "#191D88",
  },
  titleReport: {
    color: "#9EACB4",
    fontSize: 20,
  },
  amount: {
    color: '#191D88',
    fontSize: 40,
    marginBottom: 20,
  },
  monthsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  monthButton: {
    backgroundColor: '#76A24A',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
  monthButtonText: {
    color: 'white',
  },
  summaryContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 60,
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },

});
