htcount=$(curl -s --user tomcatstatus:tomcatstatus http://`hostname`.mypc.com:887/manager/jmxproxy?qry=Catalina:type=ThreadPool,name=\"http-nio-887\" |grep sBusy | cut -d ' ' -f2)
echo $htcount