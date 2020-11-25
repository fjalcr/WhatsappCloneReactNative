export const formatDate = (date) => {
    const today: any = new Date()
    const givenDate: any = new Date(date)
    const diffTime = Math.abs(today - givenDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if ( diffDays <= 7 ) {
        switch (givenDate.getDay()) {
            case 0:
                return 'Sunday';    
            break;
            case 1:
                return 'Monday';    
            break;
            case 2:
                return 'Tuesday';    
            break;
            case 3:
                return 'Wednesday';    
            break;
            case 4:
                return 'Thursday';    
            break;
            case 5:
                return 'Friday';    
            break;
            case 6:
                return 'Saturday';    
            break;
            default:
                return givenDate.toISOString().slice(0,10);    
                break;
        }
    }else{
        return givenDate.toISOString().slice(0,10);    
    }
}