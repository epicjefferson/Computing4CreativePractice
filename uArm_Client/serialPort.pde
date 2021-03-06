// serial port
import java.math.BigInteger;

Serial myPort;


void scanPort()
{
  if(Serial.list().length >0)
  {
    String portName = Serial.list()[0];
    myPort = new Serial(this, portName, 9600);
    myPort.bufferUntil('\n');
    dropList1.setItems(Serial.list(), 0);
    SERIAL_EN = true;
  }
  else{
    dropList1.setItems(new String[]{"NONE"}, 0);
  }
}

void sendPos(int _posZ, int _posY, int _posX, int _posH, byte ctlData)
{
  // println("Rotation: " + _posX + "  Stretch: " + _posY + "  Height: " + _posZ + "  HandRot: " + _posH + "  Grab: " + ctlData);
  byte[] send = 
  {
    byte(0xFF),
    byte(0xAA),
    byte((_posX >> 8) & 0xFF),
    byte( _posX & 0xFF),
    byte((_posZ >> 8) & 0xFF),
    byte( _posZ & 0xFF),
    byte((_posY >> 8) & 0xFF),
    byte( _posY & 0xFF),
    byte((_posH >> 8) & 0xFF),
    byte( _posH & 0xFF),
    byte(ctlData)
  };
  if(SERIAL_EN)
     myPort.write(send);
   // String result = new BigInteger(1, send).toString(16);
   // println(result);
   if(SOCKET_EN)
    {
         client.send(send);
    }
}

void sendAngle(int _angleL, int _angleR, int _angleRot, int _angleHandRot, byte ctlData)
{
  print("L:"); print(_angleL);
  print(" R:"); print(_angleR);
  print(" Rot:"); print(_angleRot);
  print(" HRot:"); println((byte)(_angleHandRot) & 0xFF);
  
  byte[] send = 
  {
    byte(0xFF),
    byte(0xAB),
    byte((_angleL >> 8) & 0xFF),
    byte( _angleL & 0xFF),
    byte((_angleR >> 8) & 0xFF),
    byte( _angleR & 0xFF),
    byte((_angleRot >> 8) & 0xFF),
    byte( _angleRot & 0xFF),
    byte((_angleHandRot >> 8) & 0xFF),
    byte( _angleHandRot & 0xFF),
    byte(ctlData)
  };
   if(SERIAL_EN)
     myPort.write(send);
   // String result = new BigInteger(1, send).toString(16);
   // println(result);
   if(SOCKET_EN)
    {
         client.send(send);
    }   
}

void reset(){
    byte[] send = 
      {
        byte(0xFF),
        byte(0xAA),
        byte((0 >> 8) & 0xFF),
        byte( 0 & 0xFF),
        byte((0 >> 8) & 0xFF),
        byte( 0 & 0xFF),
        byte((0 >> 8) & 0xFF),
        byte( 0 & 0xFF),
        byte((0 >> 8) & 0xFF),
        byte( 0 & 0xFF),
        byte(0x80)
      };
   if(SERIAL_EN)
     myPort.write(send);
   // String result = new BigInteger(1, send).toString(16);
   // println(result);
   if(SOCKET_EN)
         client.send(send);  
}

byte unsignedByte( int val )
{
  return (byte)( val > 127 ? val - 256 : val ); 
}
