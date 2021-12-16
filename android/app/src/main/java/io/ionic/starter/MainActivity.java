package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

@Override
public void onCreate(Bundle saveInstanceState) {
    super.obCreate(saveInstanceState);

    this.init(saveInstanceState, new ArrayList<Class<? extends Plugin>(){{
        add(jp.rdlabo.capacitor.plugin/admob.Admob.class);
    }});
    }
}
