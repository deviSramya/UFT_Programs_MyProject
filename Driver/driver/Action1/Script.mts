'-----------------------action1
mrowcount=datatable.GetSheet("Action1").GetRowCount
For i = 1 To mrowcount Step 1
	datatable.SetCurrentRow(i)
	If datatable("ModuleExe","Action1")="Y" Then
		modid=datatable("ModuleID","Action1")
		'msgbox modid
		'--------------------------------action2
		tcrowcount=datatable.GetSheet("Action2").GetRowCount
		For j = 1 To tcrowcount Step 1
			datatable.SetCurrentRow(j)
			If modid=datatable("ModuleID","Action2") and datatable("TestCaseExe","Action2")="Y" Then
				testcaseid=datatable("TestCaseID","Action2")
				'msgbox testcaseid
		'------------------------------------action3		
				tsrowcount=datatable.GetSheet("Action3").GetRowCount
				For k = 1 To tsrowcount Step 1
					datatable.SetCurrentRow(k)
					If testcaseid=datatable("TestCaseID","Action3") Then
						keyword=datatable("Keyword","Action3")
						'msgbox keyword
						
 						Select case keyword
						
						Case "lh"
						Call launch()
						Case "ln"
						Call login("john","hp")
						Case "ce"
						Call close()
						Case "nr"
						Call neworder()
						case "lnd"

drowcount=datatable.GetSheet("Action4").GetRowCount
For l=1  To drowcount Step 1
	datatable.SetCurrentRow(l)
	agentname=datatable("username","Action4")
	password=datatable("password","Action4")
	Call launch()
	Call login(agentname,password)
	Call close()
Next
						
	End Select
			End If
				Next
			End If
		Next
	End If
Next





