import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, ImageBackground, TouchableOpacity, Image, TextInput,SafeAreaView, ScrollView,SearchBar, SectionList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Images = {uri:"https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-simple-reading-cartoon-background-border-image_202329.jpg"};
const username = {uri: "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png", width:25, height:25 };
const password = {uri:"https://cdn1.vectorstock.com/i/1000x1000/28/35/password-protection-icon-flat-design-vector-7562835.jpg",width:24, height:24};
const fullname={uri:"https://th.bing.com/th/id/OIP.6tTlAPJiEUR_K4Oo_ts1tQHaHa?pid=ImgDet&rs=1",width:25, height:25 };
const email = {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDjYlG_eYYOVM-7ev8JZp25gwMLnbLDQ1MVOCCdpCijwk-Npt8An-6F4X47Pftlf5Nqg&usqp=CAU",width:25, height:25};
const reader = {uri:"https://image.shutterstock.com/image-photo/banners-headers-literature-reading-topics-260nw-1665846397.jpg"};

//..........................................................................................................................................................

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={Images} style={{flex:1, justifyContent:'center'}}>
        <Image source={{uri:"https://cdn6.aptoide.com/imgs/0/2/9/029b5723b959265245b8045a00f61102_icon.png", width:100,height:100}} style={{marginLeft:160, borderRadius:100,marginBottom:20}}></Image>
        <View style={{}}>
          <View>
            <Text style={{fontSize:35,
            textAlign:'center',
            textShadowColor:'#009900',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
            
            }}>Welcome To Reader</Text>
            
          </View>
          <View style={styles.inputcontainer}>
          <Text
            style={{textAlign:'center',
            fontSize:20,
            marginRight:100,
            textShadowColor:'#009900',
            textShadowOffset:{
              height:1,
            },
            textShadowRadius:1
            }}
            >LOGIN</Text>
            <View style={styles.items}>
              <Image source={username} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', width:200, height:50, paddingLeft:10,  borderRadius:10,}} placeholder='User name'></TextInput>
            </View>
            <View style={styles.items}>
              <Image source={password} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Password'></TextInput>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signandlog}
              onPress={()=>navigation.navigate('home')}>
              <Text style={{color:'#ffffff'}}>Log In</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center', flexDirection:'row', marginLeft:130, paddingTop:30}}>
            <Text >Forgot password? </Text>
            <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('New User Sign In')}>
                <Text style={{fontSize:15, color:'green', fontWeight:'bold'}}> Reset</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>
        <View  style={styles.dont}>
          <Text >Don't have an account? 
            
          </Text>
          <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('New User Sign In')}>
              <Text style={{fontSize:15, color:'green', fontWeight:'bold'}}> Sign In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

//................................................................................................................................................................




function SignInScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={Images} style={{flex:1, justifyContent:'center'}}>
      <Image source={{uri:"https://cdn6.aptoide.com/imgs/0/2/9/029b5723b959265245b8045a00f61102_icon.png", width:100,height:100}} style={{marginLeft:160, borderRadius:100,marginBottom:25}}></Image>
      <Text style={{fontSize:35,
            textAlign:'center',
            textShadowColor:'#009900',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
            
            }}>Welcome To Reader</Text>
            <Text
            style={{textAlign:'center',
            fontSize:20,
            paddingTop:50,
            }}
            >Provide your details below.....</Text>
        <View style={{}}>
          <View style={styles.inputcontainer}>
              <View style={styles.items}>
                <Image source={fullname} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', width:200, height:50, paddingLeft:10,  borderRadius:10,}} placeholder='Full Name'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={email} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Email'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={username} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='User Name'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={password} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Password'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={password} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Confirm pw'></TextInput>
              </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signandlog}
              onPress={()=>navigation.navigate('home')}>
              <Text style={{color:'#ffffff'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View  style={[styles.dont,{marginTop:50,marginBottom:50}]}>
          <Text >Already have an account? 
            
          </Text>
          <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('User Log In')}>
              <Text style={{fontSize:15, color:'green', fontWeight:'bold'}}> Log In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

//_____________________________________________________________________________________________________________________________________________

function Homepage({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' style={{ flex:1,justifyContent:'center'}}>
       {/* <Text style={{fontSize:35,
            textAlign:'center',
            textShadowColor:'#009900',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
            
            }}>Home
          </Text>*/}
        <View style={{flex:1,marginTop:1}}>
          <ImageBackground resizeMode='cover' source={reader} style={{flex:1, justifyContent:'center', maxHeight:150,}}>
            <Text
            style={{fontSize:50,
              paddingTop:10,
              color:'white',
              textAlign:'center',
              textShadowColor:'#20b2aa',
              textShadowOffset:{
                height:1,
                width:3
              },
              textShadowRadius:1}}
            >READER</Text>
            <Text
            style={{
              fontSize:10,
              color:'white',
              textAlign:'center',
              paddingLeft:5,
              paddingRight:9
            }}
            >An elegant app for reading ebooks on your phone or tablet. Reader e-book app makes reading easy. Anytime you want, anywhere you might be.</Text>
          </ImageBackground>
        </View>
        <View style={{marginBottom:10}}>
          <View >
            <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:'rgb(230,230,230)', marginLeft:75, marginBottom:25, marginRight:85, borderRadius:30}}>
              
              <TextInput placeholder='Search' style={{fontSize:25, marginRight:15}}></TextInput>
              <TouchableOpacity><Ionicons name='search' size={25} style={{marginLeft:20, marginTop:5}}></Ionicons></TouchableOpacity>
            </View>
            
          </View>
          <View style={{paddingTop:5,paddingBottom:30, backgroundColor:'rgba(169,169,169,0.2)', borderRadius:10}}>
          <Text style={{
            fontSize:20,
            paddingTop:5,
            paddingBottom:5,
            paddingLeft:10,
            color:'black',
            textShadowColor:'rgba(169,169,169,1)',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
          }}>New Arrivals</Text>
          <ScrollView horizontal={true} style={{marginLeft:10, marginRight:10}}>
            
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-350,f-jpg,pr-true/edition/9781529083521.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://shereads.com/wp-content/uploads/2021/11/LightYearsfromHome_MikeChen.jpg', width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_499,w_324/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2022%2F01%2FEngines-of-Empire-small.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://shereads.com/wp-content/uploads/2021/11/DeadSilence_S.A.Barnes.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://studentlanka.com/wp-content/uploads/2019/04/AL-Trigonometry-1.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51U+wj5BbKL._SX331_BO1,204,203,200_.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-350,f-jpg,pr-true/edition/9781529083521.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            
          </ScrollView>
        </View>
        <View style={{paddingTop:5,paddingBottom:30, backgroundColor:'rgba(169,169,169,0.2)', borderRadius:10, marginTop:10}}>
          <Text style={{
            fontSize:20,
            paddingTop:5,
            paddingBottom:5,
            paddingLeft:10,
            color:'black',
            textShadowColor:'rgba(169,169,169,1)',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
          }}>Trending</Text>
          <ScrollView horizontal={true} style={{marginLeft:10, marginRight:10}}>
            
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://fivebooks.com/app/uploads/books/BC_0199934983-314x473.jpg', width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://www.vijithayapa.com/Prodpics/BK217881.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://sinhalaebooks.com/wp-content/uploads/2018/11/law-book-195x300.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://static-01.daraz.lk/p/mdc/ac5d6c56ae17c888536f6a0d92a0b40c.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/810z6YHULzL.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={styles.scrollbooks}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
              <Image source={{uri:'https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-350,f-jpg,pr-true/edition/9781529083521.jpg',  width:105, height:160}}></Image>
              <View style={{backgroundColor:'#8b0000'}}>
                <Text style={{color:'white', textAlign:'center', borderRadius:15,}}>Rs 1000.00</Text>
              </View>
            </TouchableOpacity>
            </View>
            
          </ScrollView>
        </View>
        </View>
        
      </ImageBackground>
  </SafeAreaView>
  );
}


//___________________________________________________________________________________________________________________________________________________

function Bookpage({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' style={{flex:1, justifyContent:'center'}}>
        <ScrollView>
        {/*<Text style={{fontSize:25,
            textAlign:'center',
            textShadowColor:'blue',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
            
            }}>Categories</Text>*/}

        <View style={{flexDirection:'row'}}>
            <SectionList
            sections={[
              {title: "Novels", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "Fictions", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "History", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "Education", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "Short Stories", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "Translations", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
              {title: "Plitical", data:["Book Name","Book Name","Book Name","Book Name","Book Name"]},
            ]}
            
            renderSectionHeader={({section})=>(
              <Text style={[styles.line,{fontSize:25,textAlign:'center',marginBottom:35,marginTop:15,backgroundColor:'rgba(219,220,220,0.7)'}]}>{section.title}</Text>
            )}
            renderItem={({item})=>(
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
                <View >
                  <Image source={{uri:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1381/posts/36206/final_image/Final%20Preview%20Book%20Template.jpg",width:165,height:250}}></Image>
                  <Text style={[styles.line,{marginBottom:10, textAlign:'center'}]}>{item}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Book')} style={{marginLeft:30,}}>
                <View >
                  <Image source={{uri:"http://corrupteddevelopment.com/wp-content/uploads/2011/09/psd-book-template.jpg",width:165,height:250}}></Image>
                  <Text style={[styles.line, {marginBottom:10, textAlign:'center'}]}>{item}</Text>
                </View>
              </TouchableOpacity>
              </View>
            )}
            />
        </View>

        </ScrollView>
      </ImageBackground>
  </SafeAreaView>
  );
}

//__________________________________________________________________________________________________________________________________________________


function Profile({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:35,
            textAlign:'center',
            textShadowColor:'#009900',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1
            
            }}>Profile</Text>
        
      </ImageBackground>
  </SafeAreaView>
  );
}

//____________________________________________________________________________________________________________________________________________________

function  BookInterface({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' style={{flex:1, justifyContent:'center'}}>
        <View>
          <Image source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13a46c30876781.563786db95da3.jpg', height:250, width:350}}
          style={{justifyContent:'center', alignSelf:'center'}}></Image>
        </View>
        <View style={{marginTop:25}}>
          <Text style={{marginRight:5, marginLeft:5, fontSize:35}}>Bone Coulee</Text>
          <Text style={{marginRight:5, marginLeft:5, fontSize:25}}>by Larry Warwaruk (Author)</Text>
        </View>

        <View style={{marginTop:15}}>
          <Text style={{marginRight:5, marginLeft:5, fontSize:15}}>As teenagers, in a drunken incident Mac Chorniak and his friends were responsible for the death of a young Indigenous man. Thanks to the prevailing prejudices of the 1950s, the boys received no punishment. Now the friends have grown old, and while most have settled into the routines, habits and politics of Duncan, their rural prairie town, Mac continues to live under the weight of guilt and regret..................</Text>
        </View>

        

        <View style={{marginTop:15,marginLeft:5}}>
          <View style={{marginBottom:15}}><Text style={{marginLeft:10,fontSize:20}}>Rating:<Text style={{color:'black', fontSize:25, textAlign:'center',textShadowColor:'red',textShadowOffset:{width: 1, height:1},textShadowRadius:1,}}>61%</Text></Text></View>
        </View>
        
        <View style={{backgroundColor:'rgba(20,20,100,0.5)', marginRight:270, marginLeft:10, marginTop:10, borderRadius:10}}>
          <Text style={{color:'white', fontSize:25, textAlign:'center',textShadowColor:'black',textShadowOffset:{width: 5, height: 5},textShadowRadius:10,}}>Rs: 1800.00</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:50,}}>
            <TextInput placeholder='Leave a comment' style={{width:200, height:40, backgroundColor:'rgba(169,169,169,0.6)', borderRadius:10, marginLeft:10,}}></TextInput>
            <View style={{backgroundColor:'#8b0000',width:100, height:40,  marginRight:120, borderRadius:10}}><Text style={{color:'white', textAlign:'center',marginTop:10}}>Submit</Text></View>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//_________________________________________________________________________________________________________________________________________________

const Tab = createBottomTabNavigator();
function HomeTabs(){
  return(
    <Tab.Navigator initialRouteName='Home' 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'book' : 'book';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Categories" component={Bookpage} />
      <Tab.Screen name = "Profile" component={Profile} options={{ tabBarBadge: 3 }}/>
      {/*<Tab.Screen name='Book' component={BookInterface}/>*/}
    </Tab.Navigator>
  );
}

//___________________________________________________________________________________________________________________________________________________

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="User Log In" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="New User Sign In" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={HomeTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Book" component={BookInterface}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//________________________________________________________________________________________________________________________________________________________

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:270,
    
    marginTop:10,
    alignItems:'center'
    
  },
  inputcontainer:{
    paddingTop:10,
    paddingBottom:10,
    marginLeft:100,
    marginTop:50
    
   
  },
  signandlog:{
    backgroundColor:'#004d00',
    alignItems:'center',
    marginLeft:190,
    marginRight:100,
    paddingTop:8,
    paddingBottom:8,
    marginTop:10,
    borderRadius:15,
  },
  dont:{
    alignItems:'center',
    marginTop:120,
    flexDirection:'row',
    marginLeft:110
  },
  scrollbooks:{
    paddingRight:30,
    
  },
});
