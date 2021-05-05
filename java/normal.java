public class normal {


  public static void main(String[] args) {

    String[] functionNames = {"NormCD", "pleft", "pright", "zleft", "zright"};

    String[] tips = {"normal NormCD z-score [terms] \nFinds the area under the Normal distribution curve from 0 to the z-score using a Maclaurin approximation of the Normal curve's antiderivative with the given number of terms (default 25)\n",
"normal pleft z-score [terms] \nFinds the area to the left of the z-score under the Normal distribution curve using a Maclaurin approximation of the Normal curve's antiderivative with the given number of terms (default 25)\n",
"normal pright z-score [terms] \nFinds the area to the right of the z-score under the Normal distribution curve using a Maclaurin approximation of the Normal curve's antiderivative with the given number of terms (default 25)\n",
"normal zleft area [terms] [iterations] \nFinds the z-score that has the given area to the left under the Normal distribution curve using the given number of iterations of Newton's Method (default 25) on a Maclaurin approximation of the Normal curve's antiderivative with the given number of terms (default 25)\n",
"normal zright area [terms] [iterations] \nFinds the z-score that has the given area to the right under the Normal distribution curve using the given number of iterations of Newton's Method (default 25) on a Maclaurin approximation of the Normal curve's antiderivative with the given number of terms (default 25)\n"};


    if (args.length == 2) {
      String methodName = args[0];
      if (methodName.equals("help")) {
        for(int i = 0; i < functionNames.length; i++) {
          if(args[1].equals(functionNames[i])) {System.out.println(tips[i]);}
        }
      } else {
        double arg = Double.parseDouble(args[1]);
        switch(methodName) {
          case "NormCD":
            System.out.println(NormCD(arg, 25));
            break;
          case "pleft":
            System.out.println(pleft(arg, 25));
            break;
          case "pright":
            System.out.println(pright(arg, 25));
            break;
          case "zleft":
            System.out.println(zleft(arg, 25, 25));
            break;
          case "zright":
            System.out.println(zright(arg, 25, 25));
            break;
          default:
            System.out.println("ERROR: unrecognized function or improper number of parameters. Try running [normal] for list of functions or [help function] for help with a function");
        }
      }
    } else if (args.length == 3) {
      String methodName = args[0];
      double arg1 = Double.parseDouble(args[1]);
      int arg2 = Integer.parseInt(args[2]);
      switch(methodName) {
        case "NormCD":
          System.out.println(NormCD(arg1, arg2));
          break;
        case "pleft":
          System.out.println(pleft(arg1, arg2));
          break;
        case "pright":
          System.out.println(pright(arg1, arg2));
          break;
        case "zleft":
          System.out.println(zleft(arg1, 25, arg2));
          break;
        case "zright":
          System.out.println(zright(arg1, 25, arg2));
          break;
        default:
          System.out.println("ERROR: unrecognized function or improper number of parameters. Try running [normal] for list of functions or [help function] for help with a function");
      }
    } else if (args.length == 4) {
      String methodName = args[0];
      double arg1 = Double.parseDouble(args[1]);
      int arg2 = Integer.parseInt(args[2]);
      int arg3 = Integer.parseInt(args[3]);
      switch(methodName) {
        case "zleft":
          System.out.println(zleft(arg1, arg2, arg3));
          break;
        case "zright":
          System.out.println(zright(arg1, arg2, arg3));
          break;
        default:
          System.out.println("ERROR: unrecognized function or improper number of parameters. Try running [normal] for list of functions or [help function] for help with a function");
      }
    } else {
      System.out.println("------------------------------\nNormal Distribution Calculator\n\nFunctions:\nNormCD, pleft, pright, zleft, zright\n\nRun [normal help function] for help with a function\n\n------------------------------");
    }
  }


  public static double NormCD(double z, int accuracy) {
    if (z == 0) {return 0;} else if (z < 0) {return -NormCD(-z, accuracy);} else {
      double sum = 0.0;
      double coefficient = 1;
      for(int i = 1; i <= accuracy*2 - 1; i += 2) {
        sum  += Math.pow(z, i) * coefficient;
        coefficient = coefficient * -i / (Math.pow(i, 2) + 3*i + 2);
      }
      sum = sum / Math.sqrt(2*Math.PI);
      return (sum > 0 && sum < 0.5 ? sum : 0.5);
    }
  }
  public static double NormCD(double z) {
    return NormCD(z, 25);
  }


  public static double pleft(double z, int accuracy) {
    return 0.5 + NormCD(z, accuracy);
  }
  public static double pleft(double z) {
    return 0.5 + NormCD(z);
  }


  public static double pright(double z, int accuracy) {
    return 1 - pleft(z, accuracy);
  }
  public static double pright(double z) {
    return 1 - pleft(z);
  }


  public static double zleft(double p, int normAccuracy, int newtonAccuracy) {
    if(p >= 1) {return Double.POSITIVE_INFINITY;}
    else if (p <= 0) {return Double.NEGATIVE_INFINITY;}
    else {
      double z = 0;
      for(int i = 0; i < newtonAccuracy; i++) {
        z -= (pleft(z, normAccuracy) - p) * Math.sqrt(2*Math.PI) / Math.pow(Math.E, -Math.pow(z, 2) / 2);
      }
      return z;
    }
  }
  public static double zleft(double p, int newtonAccuracy) {
    return zleft(p, 25, newtonAccuracy);
  }
  public static double zleft(double p) {
    return zleft(p, 25, 25);
  }


  public static double zright(double p, int normAccuracy, int newtonAccuracy) {
    if(p <= 0) {return Double.POSITIVE_INFINITY;}
    else if (p >= 1) {return Double.NEGATIVE_INFINITY;}
    else {
      return zleft(1-p, normAccuracy, newtonAccuracy);
    }
  }
  public static double zright(double p, int newtonAccuracy) {
    return zright(p, 25, newtonAccuracy);
  }
  public static double zright(double p) {
    return zright(p, 25, 25);
  }


}

