ls p1_test_cases | grep .obj > /tmp/obj 
ls p1_test_cases | grep .txt > /tmp/txt

declare -a obj_files
declare -a txt_files

let "i=0"
while read obj
do
    obj_files[i]=$obj
    let "i=i+1"
done < /tmp/obj 

let "i=0"
while read txt
do 
    txt_files[i]=$txt 
    let "i=i+1"
done < /tmp/txt 

# function for printing result
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
BOLD='\033[1m'
NORMAL='\033[0m'
function result() {
    if [ $1 = "Success" ]; then
        printf "${GREEN}${BOLD}Success${NC}${NORMAL}\n"
    fi
    if [ $1 = "Failure" ]; then 
        printf "${RED}${BOLD}Failure${NC}${NORMAL}\n"
    fi
}

# run tests
let "tests=i"
let "obj=0"
let "txt=0"
echo "--------------------------------------------"
while [ $txt -lt $tests ];
do 
    if [ ${obj_files[obj]} = "os.obj" ]; then
        let "obj=obj+1"
    fi
    echo ${obj_files[obj]}
    ./trace out.txt p1_test_cases/${obj_files[obj]}
    success=$(./diff out.txt p1_test_cases/${txt_files[txt]})
    if [ $success = "Failure" ]; then 
        echo "Using os.obj"
        ./trace out.txt p1_test_cases/${obj_files[obj]} p1_test_cases/os.obj
        success=$(./diff out.txt p1_test_cases/${txt_files[txt]})
    fi 
    result $success
    let "obj=obj+1"
    let "txt=txt+1"
    echo "--------------------------------------------"
    rm out.txt
done 

rm /tmp/obj
rm /tmp/txt