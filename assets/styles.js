import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({

   /*----------------- ОБЩИЕ СТИЛИ --------------------------------------------------------------*/

    ImageBg1: {
        flex: 1,
        alignItems: 'center',
        width: '100%',

    },

    Container: {
        flex: 1,
        width: '100%',
       backgroundColor: 'rgba(255, 255, 255, 0)',

    },


    Shadow: {
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },


    TitleTemp: {

        width:'80%',

    },


    TitleTempText: {

        color:'#911F1E',
        textAlign:'center',
        fontFamily:'MarmeladRegular',
        fontSize: 46,

    },

    /*----------------- NAV --------------------------------------------------------------*/

    ContainerNAV: {

        paddingTop: 100,


    },

    ButtonNAV: {
        height:60,
        width: 300,
        // margin: 4,
        marginTop:16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ButtonNAV01: {
        backgroundColor: '#7B68EE',
    },

    ButtonNAV02: {
        backgroundColor: '#00325B',
    },

    ButtonNAV03: {
        backgroundColor: '#00CED1',
    },

    ButtonNAVText: {

        color:'#ffffff',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Philosopher',
        fontStyle:'italic',
        fontSize: 18,
        fontWeight:'bold',
    },

    LogoNAVBox: {

     //   flex: 1,
        justifyContent: 'center',
   //width: 100,
    height:70,
     //   alignItems: 'center',
       // resizeMode: 'stretch',
       marginBottom:20,

    },

    ColorLogo: { fill: '#FFFFFF',
},

    /*----------------- Main --------------------------------------------------------------*/

    ContainerMain: {

        paddingTop: 130,
     //   verticalAlign:'top',
     //   alignItems: 'center',
     //   justifyContent: 'center',
    },

    ButtonMain: {
        height:100,
        width: 100,
        margin: 10,
        padding:10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ButtonMain01: {
        backgroundColor: '#00325B',


    },

    ButtonMain02: {
        backgroundColor: '#538CDB',

    },
    ButtonMain03: {
        backgroundColor: '#DAA900',

    },
    ButtonMain04: {
        backgroundColor: '#911F1E',

    },
    TextButtonMain: {
        fontFamily:"Roboto",
        marginTop: 10,
        color:"#ffffff",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize: 12,
        fontWeight:"600",


    },

    ImageMain01: {

        width: 44,
        height: 59,
        alignItems: 'center',
    },


    ImageMain02: {

        width: 50,
        height: 49,
        alignItems: 'center',
    },
    ImageMain03: {

        width: 47,
        height: 49,
        alignItems: 'center',
    },
    ImageMain04: {

        width: 50,
        height: 50,
        alignItems: 'center',
    },

    ImageMain05: {

        width: 42,
        height: 49,
        alignItems: 'center',
    },

    ImageMain06: {
        marginTop: 40,
        width: 44,
        height: 44,
        alignItems: 'center',
    },

    InfoBox:{

        // flex: 1,
        justifyContent: 'center',
     //  width: 70,
        height:70,
        alignItems: 'center',
        resizeMode: 'stretch',
        marginTop:40,

    },

    ColorInfo: { fill: '#4FEFA5' },


    /*  ---------------- BOTTOM MENU ----------------------------- */
    BodyArea:{ flex:9,justifyContent:'center',
        alignItems: "center",
        //  backgroundColor:'#B0E0E6',

    },

    MenuArea:{

        height: 80,
        /*flex:1,*/
        backgroundColor:'#ffffff',
        padding:4,
    },

    MenuContainer:{

        flex:1,
        //backgroundColor:'#008B8B',
        flexDirection:'row',
        paddingBottom:10,



    },


    MenuItem:{

        flex:1,
        //backgroundColor:'#B0C4DE',
        Width:'100%',
        margin:4,
        //  flexDirection:'column',
        justifyContent:'center',
        alignItems: "center",

    },


    MenuText: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 11,
        marginTop: 0,
    },

    MenuIconContainer:{
        width: '100%'

    },
    MenuIconBox:{
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignSelf: 'center',
        marginEnd: 0,
        marginBottom:6,
        alignItems:'center',
    },

    IconMenuColor:{
        fill:'#00325B',
        //   fill:'none',
        //   stroke:'#acadae',
        // strokewidth: 5 ,

    },






    /*  ---------------- LessonsNN ----------------------------- */

    ContainerLessons: {
        flex: 1,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    LessonsCard: {
        width: '94%', // Задаем ширину 88%
        height: 160, // Задаем высоту 200px
        borderRadius: 20, // Задаем радиус углов 20
        //backgroundColor: '#00325B', // Цвет фона LessonCardNN
        backgroundColor: 'rgba(0, 50, 91, 0.1)',

        //   opacity:0.2,
        flexDirection: 'row', // Определяем направление горизонтальное
        padding:8,

    },
    LessonsCardLeft: {
        flex: 1, // Занимает 1/3 ширины родительского элемента
        // backgroundColor: 'lightpink', // Цвет фона LessonCardNNLeft
        padding: 10, // Отступы со всех сторон
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LessonsCardRight: {
        flex: 2, // Занимает 2/3 ширины родительского элемента
        flexDirection: 'column', // Определяем направление вертикальное
        //  backgroundColor: 'lightgreen', // Цвет фона LessonCardNNRight
        //  padding: 4, // Отступы со всех сторон
        borderRadius: 10,
    },
    LessonsCardRightContainer: {
        flex: 1, // Занимает равное пространство внутри LessonCardNNRight
        //  padding: 4, // Отступы со всех сторон
        borderRadius: 10,
        // backgroundColor: 'lightblue', // Цвет фона LessonCardNNRightContainer
    },
    LessonsCardRightItem1: {
        flex: 1, // Занимает равное пространство внутри LessonCardNNRightContainer
        //   backgroundColor: 'lightcoral', // Цвет фона LessonCardNNRightItem
        borderRadius: 10,
        //   padding: 6, // Отступы со всех сторон
        alignItems: 'flex-end',

    },
    LessonsCardRightItem2: {
        flex: 3, // Занимает равное пространство внутри LessonCardNNRightContainer
        //   backgroundColor: 'lightsalmon', // Цвет фона LessonCardNNRightItem2
        borderRadius: 10,
        //  padding: 6, // Отступы со всех сторон
        marginTop:5,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    LessonsCardRightItem3: {
        flex: 1, // Занимает равное пространство внутри LessonCardNNRightContainer
        //   backgroundColor: 'lightseagreen', // Цвет фона LessonCardNNRightItem3
        borderRadius: 10,
        //  padding: 6, // Отступы со всех сторон
        marginTop:5,
        alignItems: 'flex-end',
        //justifyContent: 'flex-end',
    },


    line: {
        height: 1, // Высота линии
        backgroundColor: '#00325B', // Цвет линии
        width:'80%',
        marginTop:10,
        marginBottom:10,
    },

    TitleLessonCard:{
        fontFamily:'MarmeladRegular',
        paddingLeft: 10,
        color:"#00325B",
        textAlign:"left",
        textAlignVertical:"center",
        fontSize: 16,
        fontWeight:"900"


    },

    DscLessonCard:{
        fontFamily:'Roboto',
        paddingLeft: 10,
        color:"#00325B",
        textAlign:"left",
        textAlignVertical:"center",
        fontSize: 12,
        fontWeight:"600"


    },
    /*  ---------------- LessonN ----------------------------- */
























    ContainerLesson: {
        flex: 1,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    LessonCard:{
        // flex:1,
        marginTop: 50,
        paddingBottom:20,
        //  paddingBottom: 10,
        alignItems: 'center',
        width: '88%',
        //  height: 120,
        // backgroundColor: '#40E0D0',
        backgroundColor: 'rgba(0, 50, 91, 0.1)',
        borderRadius: 20,
        display:'flex',
        flexDirection: 'column',
    },
    LessonCardHeader:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
      //  height: 160,
        // backgroundColor: '#AFEEEE',
        // flex: 1,
        //  display:'flex',
        flexDirection: 'row',

    },

    LessonCardHeaderLeft:{
        //paddingTop: 10,
        flex: 1,
        width: '80%',
        //height: 40,
        //   backgroundColor: '#F1C40F',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',

    },

    LessonCardHeaderRight:{
        // paddingTop: 10,
        //flex: 1,
        // width: '40%',
        // height: 40,
        //   backgroundColor: '#17A589',
        // flex: 1,
        //  display:'flex',
        // flexDirection: 'row',
        //  justifyContent: 'center',
        //  verticalAlign:"middle",
        //justifyContent: "flex-end",
        // alignItems: "flex-end",
    },

    LessonCardFooter:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        // height: 50,
      //  backgroundColor: '#ffffff',
        // flex: 1,
        //  display:'flex',
        // flexDirection: 'row',
        borderRadius: 20,

    },


    RoundLesson: {
        height:30,
        width: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        // alignItems: 'center',
        // verticalAlign:"middle",
        justifyContent: 'center', // Выравнивание по центру по горизонтали
        //marginLeft: -10,
        marginRight: 15,
        marginTop: 15,
        padding: 4,

    },


    ButtonsLesson:{
        flexDirection: 'colum',
        justifyContent: 'center',
        alignItems: 'center',
       // marginTop: 15,
        width: '100%',

    },
    ButtonLesson: {
        //  marginLeft: 10,
        //  marginRight: 10,
        //  backgroundColor: 'green',
        //  borderRadius: 10,
        //  paddingVertical: 12,
        // paddingHorizontal: 24,
        // marginBottom: 16,
        borderRadius: 20,
        padding: 10,
        margin:10,
        backgroundColor: '#ffffff',
        width: '90%',
        height: 50,
        alignItems: 'center',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        justifyContent: 'center',
        alignSelf:'center',
        textAlign:'center',
    },

    ButtonTextLesson: {
        fontFamily:'Roboto',
        color: '#00325B',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center',
    },

    DscLesson: {
        fontSize: 30,
        padding: 20,
        flexDirection: 'row',
       // justifyContent: 'center',
        alignItems: 'center',
       // justifyContent: 'space-between',
    },

    LineLesson: {
        height: 1,
        backgroundColor: '#00325B',
        width:'80%',
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
    },

    IdTextLesson: {

        color:'#00325B',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'MarmeladRegular',
        fontSize: 20,
        marginLeft:15,
        marginTop:15,
    },

    TitleTextLesson: {

        color:'#00325B',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontSize: 16,
       marginLeft:15,
       // marginTop: 15,
      marginBottom: 15,
    },

    DscTextLesson: {

        color:'#00325B',
     //   textAlign:'justify',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontSize: 16,
       // justifyContent: 'space-between',
    },

    video: {
        alignSelf: 'center',
        width: '100%',
        height: 225,
        zIndex: 1,
    },

    thumb: {
        alignSelf: 'center',
        position: "absolute",

        width: '100%', // Установите желаемую ширину, такую же, как у видео
        height: 225, // Установите желаемую высоту, такую же, как у видео
        /*        alignItems: 'center',
                justifyContent: 'center',*/
        zIndex: 2,

    },


    /*  ----------- ABSTRACT ---------------------------------- */


    LineAbstract: {
        height: 1,
        backgroundColor: '#00325B',
        width:'80%',
        marginTop:10,
        marginBottom:10,
        //marginLeft:15,
    },




    /*  --------------------------------------------- */



    LogoRegBox: {

        // flex: 1,
        justifyContent: 'center',
        //  width: 100,
        height:200,
        alignItems: 'center',
        resizeMode: 'stretch',
        paddingBottom:20,

    },


    InfoRegBox:{

        // flex: 1,
        justifyContent: 'center',
        // width: 70,
        height:70,
        alignItems: 'center',
        resizeMode: 'stretch',
        marginTop:40,

    },


    ContainerReg: {

        paddingTop: 120,
        //   verticalAlign:'top',
      //   alignItems: 'center',
        //   justifyContent: 'center',
    },





    Image:{
        width: 100,
        height: 100,
       // width: '100%',
      //  height: '100%',
      //  padding: 6, // Отступы со всех сторон
     //   margin:5,
       borderRadius: 10,


    },


    Img:{

        width: '90%',
        height: '90%',



    },

    TreeSvgContainer:{
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        //opacity:0,
    },

    TreeSvgBox:{
        width: 40,
        height: 40,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
       // marginEnd: 20,
      //  marginBottom:20,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },



    ArrowSvgBox:{
        width: 35,
       height: 30,
marginRight:10,


    },

    CirclePlayBox:{
        width: 55,
        height: 55,
        position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -27.5}, { translateY: -27.5 }]
        ,


    },



    Tree:{
     width: 50,
     height: 50,
      //  marginBottom:10,
        textAlign:'right',
        justifyContent: 'flex-end',


    },

    CirclePlayColor:{

        fill:'#A9A9A9',

    },

    ColorArrow:{

        fill:'#ffffff',

    },

    ColorArrowRight:{

        fill:'#ffffff',

    },
    ColorArrowLeft:{

        fill:'#ffffff',

    },
    ColorTree:{

        fill:'#ffffff',

    },
    ColorStar:{
        fill:'#acadae',
     //   fill:'none',
     //   stroke:'#acadae',
       // strokewidth: 5 ,

    },

    TexLessonCard: {
        fontSize: 14,

    },




});

