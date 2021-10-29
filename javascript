public class uts {
    
    public static void main(String args[]) {
        int totalBelanja =60000;
        int umur =17;
        int beratBadan =75;
        int potongan =0;
        int persentasePotongan =0;
        if (totalBelanja > 50000 && umur >16){
             //kondisi true
            if (umur >=17 && umur <=25) {
              persentasePotongan =beratBadan /10;
              potongan =totalBelanja + persentasePotongan /100;
            }else if(umur >=26 && umur <=50){
              persentasePotongan = beratBadan/5;
              potongan =totalBelanja + persentasePotongan /100;
            }else {
              persentasePotongan = beratBadan /2;
              potongan = totalBelanja + persentasePotongan /100;
            }
            System.out.println("Anda mendapatkan " +
                 "potongan " + persentasePotongan + "% " +
                 "dari " + totalBelanja +
                 "Sebesar Rp " + potongan);
        }else {
            //kondisi false
            System.out.println("Anda belum mendapatkan promo ");
        }
    }
}
