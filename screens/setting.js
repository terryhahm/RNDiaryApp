import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Setting() {

  const SeiresPW = [false,false,false,false]
  const [PW, PWChange] = useState("PW is ")
  const [FirstCode, FirstCodeChange] = useState("white")
  const [SecondCode, SecondCodeChange] = useState("white")
  const [ThirdCode, ThirdCodeChange] = useState("white")
  const [ForthCode, ForthCodeChange] = useState("white")




  const one = "1"
  const two = "2"
  const three = "3"
  const four = "4"
  const five = "5"
  const six = "6"
  const seven = "7"
  const eight = "8"
  const nine = "9"
  const zero = "0"


  function NumberPressed(value)
  {
    PWChange(PW + value)

    if(FirstCode == "white")
    {
      FirstCodeChange("black")
    }
    else if(SecondCode == "white")
    {
      SecondCodeChange("black")
    }
    else if(ThirdCode == "white")
    {
      ThirdCodeChange("black")
    }
    else if(ForthCode == "white")
    {
      ForthCodeChange("black")
    }
    else
    {
      FirstCodeChange("white")
      SecondCodeChange("white")
      ThirdCodeChange("white")
      ForthCodeChange("white")
      PWChange("PW is ")
    }

  }

    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{width: "100%", height: "10%", backgroundColor: 'powderblue'}}>
          <Text>
            {PW}
          </Text>
        </View>
        <View style={{width: "100%", height: "20%", backgroundColor: 'skyblue'}} >
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: "3%"

          }}>
            <View style={{width: "3%",  borderRadius: 100 ,height:"10%", backgroundColor: FirstCode}} />
            <View style={{width: "3%",  borderRadius: 100 ,height:"10%", backgroundColor: SecondCode}} />
            <View style={{width: "3%",  borderRadius: 100 ,height:"10%", backgroundColor: ThirdCode}} />
            <View style={{width: "3%",  borderRadius: 100 ,height:"10%", backgroundColor: ForthCode}} />

          </View>

        </View>
        <View style={{width: "100%", height: "70%", backgroundColor: 'steelblue'}}>
          <View style={{
            flex: 1,
            flexDirection: 'column',

          }}>
          <View style={{height: "10%"}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>


          <View style={{height: "20%",borderBottomWidth:1}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
              <View
                onTouchStart={() => {
                  NumberPressed(one);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                <Text>{one}</Text>
              </View>

              <View
                onTouchStart={() => {
                  NumberPressed(two);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                <Text>{two}</Text>
              </View>

              <View
                onTouchStart={() => {
                  NumberPressed(three);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                <Text>{three}</Text>
              </View>

              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>
          <View style={{height: "20%",borderBottomWidth:1}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
                <View
                  onTouchStart={() => {
                    NumberPressed(four);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{four}</Text>
                </View>

                <View
                  onTouchStart={() => {
                    NumberPressed(five);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{five}</Text>
                </View>

                <View
                  onTouchStart={() => {
                    NumberPressed(six);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{six}</Text>

                </View>
              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>
          <View style={{height: "20%",borderBottomWidth:1}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
                <View
                  onTouchStart={() => {
                    NumberPressed(seven);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{seven}</Text>
                </View>
                <View
                  onTouchStart={() => {
                    NumberPressed(eight);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{eight}</Text>
                </View>
                <View
                  onTouchStart={() => {
                    NumberPressed(nine);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                  <Text>{nine}</Text>

                </View>
              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>
          <View style={{height: "20%",borderBottomWidth:1}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View
                onTouchStart={() => {
                  NumberPressed(zero);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                <Text>{zero}</Text>

              </View>
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>

          <View style={{height: "10%"}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "26%", backgroundColor: 'black'}} />
              <View style={{width: "11%", backgroundColor: 'black'}} />
            </View>
          </View>



          </View>


        </View>
      </View>



    )
}

const styles = StyleSheet.create({
  LockButton:{
    padding: 5,
    height: 30,
    width: 30,  //The Width must be the same as the height
    borderRadius:100, //Then Make the Border Radius twice the size of width or Height
    margin: '4%',
    backgroundColor: "#ffff"
  },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })


export default Setting


// <FlatList
//     data={[
//         {key: 'About'},
//         {key: 'Notices'},
//         {key: 'Version'},
//         {key: 'Privacy'},
//         {key: 'Notifications'},
//         {key: 'Display'},
//         {key: 'Support'},
//     ]}
//     renderItem={ ({item}) =>
//     <TouchableOpacity>
//         <Text style={styles.item}>
//             {item.key}
//         </Text>
//     </TouchableOpacity>}
// />
// <View
//   flex: 1,
//   style={styles.LockButton}>
// </View>
// <View
//   style={styles.LockButton}>
// </View>
