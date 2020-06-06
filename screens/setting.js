import React, {useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SQLite from 'react-native-sqlite-2';
import Pie from 'react-native-pie'


function Setting() {

  const db = SQLite.openDatabase("test.db", "1.0", "", 1);

  const SeiresPW = [false,false,false,false]
  const [PW, PWChange] = useState("")
  const [StoredPW, StoredPWChange] = useState("")
  const [lockStatus, lockStatusChange] = useState(false)
  const [currentNumber, currentNumberChange] = useState("")
  const [FirstCode, FirstCodeChange] = useState("#f7f6f2")
  const [SecondCode, SecondCodeChange] = useState("#f7f6f2")
  const [ThirdCode, ThirdCodeChange] = useState("#f7f6f2")
  const [ForthCode, ForthCodeChange] = useState("black")
  const enterText = "Enter Passcode"
  const setupText = "Type your Passcode"
  const reTypeText = "Try Again"
  const correctText = "Correct"

  const [StatusText, StatusChange] = useState("")
  const [IsOpen,opened] = useState(false)
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  useEffect(() => {
    if(IsOpen == false)
    {
      console.log("I am here")
      db.transaction(function(txn)
      {
          txn.executeSql(
            "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, PW VARCHAR(30))",
            []
          );
          txn.executeSql
          (
            "SELECT * FROM Users",[], function(tx,res)
            {
              if(res.rows.length == 0)
              {
                // db.transaction( (tx) => {
                //       tx.executeSql("INSERT INTO Counter (CountIndex) VALUES (:CountIndex)", [1]);
                //       testC = 1;
                //   })
                // Need to set up the Password
                txn.executeSql("UPDATE INTO Users (PW) VALUES (:PW)",[""])
                StatusChange(setupText)

              }
              else
              {
                txn.executeSql("SELECT PW FROM Users WHERE user_id = 1",[],function(tx,res)
                {
                  console.log(res.rows.item(0).PW)
                  StoredPWChange(res.rows.item(0).PW)
                  StatusChange(enterText)
                  lockStatusChange(false)
                });
              }
            }
          )
        });
        opened(true)
        // console.log("whattt" + currentNumber)
    }
    // console.log("\nin use effect currentNumber" + currentNumber)
    // console.log("in use effect PW" + PW)
    // console.log(PW.length)
    if(PW.length >= 3)
    {
      db.transaction(function(txn)
      {
          txn.executeSql(
            "SELECT PW FROM Users",[], function(tx,res)
            {
              if(StatusText == setupText)
              {
                txn.executeSql("UPDATE Users SET PW = ? WHERE user_id = 1",[PW],function(tx,res)
                {
                  StatusChange(enterText)
                });
              }
              else if(StatusText == enterText)
              {
                //compare with the PW
                console.log(PW)
                console.log(StoredPW)
                console.log(StatusText)
                if(PW != StoredPW)
                {
                  lockStatusChange(false)
                  console.log("wrong")
                }
                else {
                  lockStatusChange(true)
                  console.log("correct")
                }

              }
            }
          )
      });
      PWChange("")
    }

  },[currentNumber,PW,StoredPW],

  );

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
  const red = "red"
  const orange = "orange"
  const yellow = "yellow"
  const green = "green"
  const navy = "navy"
  const blue = "blue"
  const purple = "purple"


function NumberPressed(value)
{
  // console.log(value)
  if(value == -1)
  {
    PWChange(PW.slice(0, -1))

  }
  else {
    PWChange(PW+value.toString())
  }
  currentNumberChange(value.toString())
  // console.log("\nin numberpressed currentNumber" + currentNumber)
  // console.log("in numberpressed PW" + PW)



  // currentNumberChange("")
  // console.log("PW in numberpressed" + PW)

  if(value == -1)
  {
    if(ThirdCode != "#f7f6f2")
    {
      ThirdCodeChange("#f7f6f2")
    }
    else if(SecondCode != "#f7f6f2")
    {
      SecondCodeChange("#f7f6f2")
    }
    else if(FirstCode != "#f7f6f2")
    {
      FirstCodeChange("#f7f6f2")
    }
    else {
      console.log("empty")
    }
  }
  else
  {


    if(FirstCode == "#f7f6f2")
    {
      if(value  == 1)
      {
        FirstCodeChange(red)
      }
      else if(value == 2)
      {
        FirstCodeChange(orange)
      }
      else if(value == 3)
      {
        FirstCodeChange(yellow)
      }
      else if(value == 4)
      {
        FirstCodeChange(green)
      }
      else if(value == 5)
      {
        FirstCodeChange(navy)
      }
      else if(value == 6)
      {
        FirstCodeChange(blue)
      }
      else if(value == 7)
      {
        FirstCodeChange(purple)
      }
    }
    else if(SecondCode == "#f7f6f2")
    {
      if(value  == 1)
      {
        SecondCodeChange(red)
      }
      else if(value == 2)
      {
        SecondCodeChange(orange)
      }
      else if(value == 3)
      {
        SecondCodeChange(yellow)
      }
      else if(value == 4)
      {
        SecondCodeChange(green)
      }
      else if(value == 5)
      {
        SecondCodeChange(navy)
      }
      else if(value == 6)
      {
        SecondCodeChange(blue)
      }
      else if(value == 7)
      {
        SecondCodeChange(purple)
      }
    }
    else if(ThirdCode == "#f7f6f2")
    {
      if(value  == 1)
      {
        ThirdCodeChange(red)
      }
      else if(value == 2)
      {
        ThirdCodeChange(orange)
      }
      else if(value == 3)
      {
        ThirdCodeChange(yellow)
      }
      else if(value == 4)
      {
        ThirdCodeChange(green)
      }
      else if(value == 5)
      {
        ThirdCodeChange(navy)
      }
      else if(value == 6)
      {
        ThirdCodeChange(blue)
      }
      else if(value == 7)
      {
        ThirdCodeChange(purple)
      }

      sleep(500).then(() => {
        FirstCodeChange("#f7f6f2")
        SecondCodeChange("#f7f6f2")
        ThirdCodeChange("#f7f6f2")
        // PWChange("")

      })


    }
  }

}

    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>



        <View style={{width: "100%", height: "10%", backgroundColor: 'white'}} >
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: "3%"
          }}>
          <Text>
            {StatusText}
            {"\n"}
            {PW}
          </Text>
          </View>
        </View>



        <View style={{
            flex: 1,
            flexDirection: 'row',
            width: "100%",
            backgroundColor: 'white'}}
            >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: "100%",
            }}
          >
          <View style={{width: "10%", height: 50, backgroundColor: 'white'}} />
            <Pie
              radius={60}
              sections={[
                {
                  percentage: 33.33333,
                  color: FirstCode,
                },
                {
                  percentage: 33.33333,
                  color: SecondCode,
                },
                {
                  percentage: 33.33333,
                  color: ThirdCode,
                },
              ]}
              strokeCap={'butt'}
            />
          <View style={{width: "10%", height: 50, backgroundColor: 'white'}} />
          </View>
        </View>

        <View style={{width: "100%", height: "70%", backgroundColor: 'white'}}>


          <View style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{height: "10%"}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "11%", backgroundColor: 'white'}} />
              <View style={{width: "26%", backgroundColor: 'white'}} />
              <View style={{width: "26%", backgroundColor: 'white'}} />
              <View style={{width: "26%", backgroundColor: 'white'}} />
              <View style={{width: "11%", backgroundColor: 'white'}} />
            </View>
          </View>


          <View style={{
              height: "20%",
              shadowRadius: 0,
              shadowColor: 'transparent',
              shadowOffset: {
                  height: 0,
              },
            }}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "23.5%", backgroundColor: 'white'}} />

                <View
                  onTouchStart={() => {
                    NumberPressed(one);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'red'}}>
                  <Text>{one}</Text>
                </View>

                <View style={{width: "3%", backgroundColor: 'white'}} />

                <View
                  onTouchStart={() => {
                    NumberPressed(two);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'orange'}}>
                  <Text>{two}</Text>
                </View>
                <View style={{width: "23.5%", backgroundColor: 'white'}} />
            </View>
          </View>


          <View style={{
              height: "1%",
              shadowRadius: 0,
              shadowColor: 'transparent',
              shadowOffset: {
                  height: 0,
              },
            }}>
          </View>

          <View style={{
              height: "20%",
              shadowRadius: 0,
              shadowColor: 'transparent',
              shadowOffset: {
                  height: 0,
              },
            }}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>

              <View style={{width: "9.5%", backgroundColor: 'white'}} />

                <View
                  onTouchStart={() => {
                    NumberPressed(seven);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'purple'}}>
                  <Text>{seven}</Text>
                </View>

              <View style={{width: "3%", backgroundColor: 'white'}} />

              <View
                onTouchStart={() => {
                  NumberPressed(three);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'yellow'}}>
                <Text>{three}</Text>
              </View>

              <View style={{width: "3%", backgroundColor: 'white'}} />


              <View
                onTouchStart={() => {
                  NumberPressed(six);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'navy'}}>
                <Text>{six}</Text>
              </View>

            <View style={{width: "9.5%", backgroundColor: 'white'}} />

          </View>
        </View>

        <View style={{
            height: "1%",
            shadowRadius: 0,
            shadowColor: 'transparent',
            shadowOffset: {
                height: 0,
            },
          }}>
        </View>

          <View style={{
              height: "20%",
              shadowRadius: 0,
              shadowColor: 'transparent',
              shadowOffset: {
                  height: 0,
              },
            }}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>

              <View style={{width: "23.5%", backgroundColor: 'white'}} />

              <View
                onTouchStart={() => {
                  NumberPressed(five);
                  }}
                style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'blue'}}>
                <Text>{five}</Text>
              </View>

              <View style={{width: "3%", backgroundColor: 'white'}} />

              <View
                  onTouchStart={() => {
                    NumberPressed(four);
                    }}
                  style={{justifyContent: "center",alignItems: "center", width: "25%", borderRadius: 100 ,backgroundColor: 'green'}}>
                  <Text>{four}</Text>
              </View>
              <View style={{width: "23.5%", backgroundColor: 'white'}} />
            </View>
          </View>



          <View style={{
              height: "10%",
              shadowRadius: 0,
              shadowColor: 'transparent',
              shadowOffset: {
                  height: 0,
              },
            }}>
          </View>



          <View style={{height: "10%"}}>
            <View style={{height: "5%", flex: 1, flexDirection: 'row'}}>
              <View style={{width: "65%", backgroundColor: 'white'}} />


          <View
            onTouchStart={() => {
              NumberPressed(-1);
              }}
            style={{justifyContent: "center",alignItems: "center", width: "26%", borderRadius: 100 ,backgroundColor: 'steelblue'}}>
            <Text>backspace</Text>
          </View>

            <View style={{width: "11%", backgroundColor: 'white'}} />
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
