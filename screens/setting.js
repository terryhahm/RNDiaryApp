import React, {useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SQLite from 'react-native-sqlite-2';

function Setting() {

  const db = SQLite.openDatabase("test.db", "1.0", "", 1);

  const SeiresPW = [false,false,false,false]
  const [PW, PWChange] = useState("")
  const [FirstCode, FirstCodeChange] = useState("white")
  const [SecondCode, SecondCodeChange] = useState("white")
  const [ThirdCode, ThirdCodeChange] = useState("white")
  const [ForthCode, ForthCodeChange] = useState("white")
  const enterText = "Enter Passcode"
  const setupText = "Type your Passcode"
  const reTypeText = "Try Again"
  const correctText = "Correct"

  const [StatusText, StatusChange] = useState("")
  const [IsOpen,opened] = useState(false)



  useEffect(() => {
    if(IsOpen == false)
    {
      db.transaction(function(txn) {
          txn.executeSql(
            "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, PW VARCHAR(30))",
            []
          );

          txn.executeSql(
            "SELECT * FROM Users",[], function(tx,res)
            {
              if(res.rows.length == 0)
              {
                StatusChange(setupText)
              }
              else
              {
                txn.executeSql("SELECT * FROM Users WHERE PW = ? AND user_id = 1",[PW],function(tx,res)
                {
                  StatusChange(enterText)
                });
              }
            }
          )
        });
        opened(true)
    }

  });

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
    //backspace
    if(value == -1)
    {
      PWChange(PW.slice(0, -1))

      if(SecondCode == "white")
      {
        FirstCodeChange("white")
      }
      else if(ThirdCode == "white")
      {
        SecondCodeChange("white")
      }
      else if(ForthCode == "white")
      {
        ThirdCodeChange("white")
      }
      else if(ForthCode == "black")
      {
        ForthCodeChange("white")
      }
    }
    else //number pressed
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
        db.transaction(function(txn) {
          // txn.executeSql("DROP TABLE IF EXISTS Users", []);
          txn.executeSql(
            "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, PW VARCHAR(30))",
            []
          );

          txn.executeSql(
            "SELECT * FROM Users",[], function(tx,res)
            {
              if(res.rows.length == 0)
              {
                txn.executeSql("INSERT INTO Users (PW) VALUES (:PW)", [PW]);
              }
              else
              {
                txn.executeSql("SELECT * FROM Users WHERE PW = ? AND user_id = 1",[PW],function(tx,res)
                {
                    if(res.rows.item(0) == null)
                    {
                      StatusChange(reTypeText)
                    }
                    else {
                      StatusChange(correctText)
                    }

                });
              }
            }
          )
          txn.executeSql("SELECT * FROM `users`", [], function(tx, res) {
            for (let i = 0; i < res.rows.length; ++i) {
              console.log("item:", res.rows.item(i));
            }
          });
        });

        FirstCodeChange("white")
        SecondCodeChange("white")
        ThirdCodeChange("white")
        ForthCodeChange("white")
        PWChange("")
      }
    }



  }

    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>

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
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'red'}}>
                <Text>{one}</Text>
              </View>

              <View
                onTouchStart={() => {
                  NumberPressed(two);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'orange'}}>
                <Text>{two}</Text>
              </View>

              <View
                onTouchStart={() => {
                  NumberPressed(three);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'yellow'}}>
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
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'green'}}>
                  <Text>{four}</Text>
                </View>

                <View
                  onTouchStart={() => {
                    NumberPressed(five);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'blue'}}>
                  <Text>{five}</Text>
                </View>

                <View
                  onTouchStart={() => {
                    NumberPressed(six);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'navy'}}>
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
                  style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'purple'}}>
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

              <View
                onTouchStart={() => {
                  NumberPressed(-1);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'white'}}>
                <Text>backspace</Text>
              </View>

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
        <View style={{width: "100%", height: "10%", backgroundColor: 'powderblue'}}>
          <Text>
            {StatusText}
            {PW}
          </Text>
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
